from hashlib import sha1
from pathlib import Path
import py_compile
import runpy

ROOT = Path(__file__).resolve().parents[1]

GENERATOR_BLOBS = [
    '3600e45cfebdc0eb446092eb8dbf503158fb5920',
    '141b6d271e38d3805df5ea55f9abfdec652cfaae',
    'b9c582d9db549fbd47b22a7f707d5a0fb4dacf',
    'acddfb97321fd5c77e2b9c163da42fff1c9a366',
    'ebd13fc6475e3388b37b47942ca01b2f5f2b55b6',
    '7cbc7940d88d44bea76b48fe5217631124fef2f7',
    'c7de1b9677d555e5df3d5768a21abacb7aab7304',
    '508c88ff2ab2e63cc9b94f2130cb8079c67fd737',
    'd58c86eda2aa4b35201f20014743c3900ad5c43a',
    '8def78c800442d805d0a71326c1c647694814185',
    '02be2f42a8ba4cbf09aa2091db50da6cf7090f18',
    '7e69035c1caf8238d0e4499827768e09c3ee34f2',
    'ea0d45ba44e7051f696525f03b541e239300c15c',
    '73c25745c9390b74f4b81c01a2a17a5a3e4b02b4',
]

STYLE_BLOBS = [
    'a73cc0500253035f7d49e14f4e478c06151ebeb8',
    'c687df75624078f5215ae7aa48268667fc256677',
    'a65393a237194ae09e1ea0c375fe54ec4d1a404f',
    '8dc5d57de44dae3cd3d1349083c76293a56b2406',
]


def git_blob_sha(content: bytes) -> str:
    header = f'blob {len(content)}\0'.encode('ascii')
    return sha1(header + content).hexdigest()


def assemble(parts_dir: Path, pattern: str, destination: Path, expected_blobs: list[str], minimum_size: int) -> None:
    parts = sorted(parts_dir.glob(pattern))
    if len(parts) != len(expected_blobs):
        raise SystemExit(
            f'{destination.name}: expected {len(expected_blobs)} source parts, found {len(parts)}'
        )

    chunks: list[bytes] = []
    for part, expected_blob in zip(parts, expected_blobs, strict=True):
        content = part.read_bytes()
        actual_blob = git_blob_sha(content)
        if actual_blob != expected_blob:
            raise SystemExit(
                f'{part.name}: source integrity check failed '
                f'(expected {expected_blob}, found {actual_blob})'
            )
        chunks.append(content)

    combined = b''.join(chunks)
    if len(combined) < minimum_size:
        raise SystemExit(
            f'{destination.name}: assembled source is unexpectedly small ({len(combined)} bytes)'
        )

    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(combined)


assemble(
    ROOT / 'scripts' / 'generator',
    'part-*.py',
    ROOT / 'scripts' / 'generate_site.py',
    GENERATOR_BLOBS,
    90_000,
)
assemble(
    ROOT / 'scripts' / 'styles',
    'part-*.css',
    ROOT / 'public' / 'assets' / 'styles.css',
    STYLE_BLOBS,
    25_000,
)

# Compile before execution so a damaged source boundary fails with a clear error.
py_compile.compile(str(ROOT / 'scripts' / 'generate_site.py'), doraise=True)
runpy.run_path(str(ROOT / 'scripts' / 'generate_site.py'), run_name='__main__')

required_outputs = [
    ROOT / 'public' / 'index.html',
    ROOT / 'public' / 'sitemap.xml',
    ROOT / 'public' / 'robots.txt',
    ROOT / 'public' / 'llms.txt',
    ROOT / 'public' / '404.html',
]
missing = [str(path.relative_to(ROOT)) for path in required_outputs if not path.is_file()]
if missing:
    raise SystemExit(f'Missing generated output: {", ".join(missing)}')

page_count = sum(1 for _ in (ROOT / 'public').rglob('index.html'))
if page_count < 26:
    raise SystemExit(f'Expected at least 26 indexable pages, found {page_count}')

print(f'DealershipCore build complete: {page_count} indexable pages generated.')
