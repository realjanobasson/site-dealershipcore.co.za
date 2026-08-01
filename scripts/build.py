from hashlib import sha256
from pathlib import Path
import runpy

ROOT = Path(__file__).resolve().parents[1]


def assemble(parts_dir: Path, pattern: str, destination: Path, expected_size: int, expected_sha: str) -> None:
    parts = sorted(parts_dir.glob(pattern))
    if not parts:
        raise SystemExit(f'No source parts found in {parts_dir}')
    content = b''.join(part.read_bytes() for part in parts)
    if len(content) != expected_size:
        raise SystemExit(f'{destination.name}: expected {expected_size} bytes, found {len(content)}')
    digest = sha256(content).hexdigest()
    if digest != expected_sha:
        raise SystemExit(f'{destination.name}: checksum mismatch ({digest})')
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(content)


assemble(
    ROOT / 'scripts' / 'generator',
    'part-*.py',
    ROOT / 'scripts' / 'generate_site.py',
    93402,
    '44d2dc5d20448e83f5112968978820746055e6920a5cad0890601809ca3d893c',
)
assemble(
    ROOT / 'scripts' / 'styles',
    'part-*.css',
    ROOT / 'public' / 'assets' / 'styles.css',
    26746,
    'a74890cf359a8fb70f6e72007b0b7f3418d6dc7e733c44d6f13660e4baa48f18',
)
runpy.run_path(str(ROOT / 'scripts' / 'generate_site.py'), run_name='__main__')
