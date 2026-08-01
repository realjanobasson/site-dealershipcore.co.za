from pathlib import Path
from html import escape
import json

PROJECT = Path(__file__).resolve().parents[1]
ROOT = PROJECT / 'public'
BASE = 'https://dealershipcore.co.za'

NAV = [
    ('Platform', '/platform/'),
    ('Solutions', '/solutions/independent-dealers/'),
    ('Ecosystem', '/ecosystem/'),
    ('Compare', '/compare/vmg-alternative/'),
    ('Resources', '/resources/'),
    ('Pricing', '/pricing/'),
]

FEATURES = {
    'lead-management': {
        'title': 'Dealership Lead Management Software',
        'meta': 'Capture every dealership enquiry, route it instantly, track response time and give every lead a visible next action in DealershipCore.',
        'eyebrow': 'Lead management',
        'headline': 'Every enquiry deserves an owner, a next action and a visible outcome.',
        'intro': 'DealershipCore brings website forms, valuation leads, finance enquiries, WhatsApp conversations and campaign responses into one accountable sales workflow.',
        'pain': 'When enquiries arrive in separate inboxes, spreadsheets and phones, follow-up depends on memory. The owner sees the missed opportunity only after the deal is gone.',
        'outcome': 'One dealership lead inbox, automatic assignment, response-time visibility and a pipeline that shows exactly what should happen next.',
        'bullets': ['Website, valuation and finance lead capture', 'Assignment by branch, source, vehicle or team', 'Response-time tracking and overdue alerts', 'Communication notes and follow-up history', 'Pipeline stages with next-action dates', 'Source, campaign and revenue attribution'],
        'visual': 'pipeline',
        'faqs': [
            ('Can leads be assigned automatically?', 'Yes. Routing rules can assign leads by branch, source, campaign, vehicle interest or team workload.'),
            ('Can managers see slow follow-up?', 'Yes. Response time, overdue follow-ups, unassigned leads and pipeline ageing are designed to be visible to managers and owners.'),
            ('Does it replace WhatsApp?', 'No. DealershipCore organises the lead and records the workflow around conversations. WhatsApp integration can be connected where supported.'),
        ],
    },
    'stock-management': {
        'title': 'Dealership Stock Management Software',
        'meta': 'Manage vehicle stock, costs, readiness, media, website publishing and sales status from one dealership stock view.',
        'eyebrow': 'Stock management',
        'headline': 'Know what is in stock, what is ready, what is stale and what needs attention.',
        'intro': 'A dealer should not need three spreadsheets and a WhatsApp group to understand stock. DealershipCore creates one operational view from acquisition to sale.',
        'pain': 'Stock data becomes unreliable when purchases, recon work, photos, advertising and sales status live in different systems.',
        'outcome': 'A live stock record with vehicle details, costs, media readiness, publishing status, lead interest and branch ownership in one place.',
        'bullets': ['Vehicle record and acquisition details', 'Reconditioning status and cost visibility', 'Photo, video and listing readiness', 'Website publishing and feed status', 'Ageing and stale-stock views', 'Lead interest connected to each vehicle'],
        'visual': 'owner',
        'faqs': [
            ('Can stock be separated by branch?', 'Yes. Every vehicle can be linked to a branch while owners retain a group-level view.'),
            ('Does it support marketplace feeds?', 'Feed and marketplace integrations are part of the integration layer and depend on the destination platform’s API or feed requirements.'),
            ('Can I see reconditioning progress?', 'Yes. Vehicle readiness, tasks, costs and blockers can be surfaced against the stock record.'),
        ],
    },
    'sales-pipeline': {
        'title': 'Dealership Sales Pipeline Software',
        'meta': 'Give sales managers one live view of dealership opportunities, next actions, expected value and reasons deals are won or lost.',
        'eyebrow': 'Sales pipeline',
        'headline': 'Stop managing the sales floor through scattered updates and end-of-day guesswork.',
        'intro': 'DealershipCore turns every qualified enquiry into a visible opportunity with an owner, vehicle, value, stage, next action and deadline.',
        'pain': 'A lead list tells you who enquired. A real pipeline tells you which deals are moving, which are stuck and what the team must do today.',
        'outcome': 'A practical sales board that helps managers coach follow-up, forecast outcomes and understand why opportunities convert or disappear.',
        'bullets': ['Custom dealership sales stages', 'Opportunity value and expected close date', 'Next action and overdue follow-up', 'Manager views by salesperson and branch', 'Win/loss reasons and pipeline ageing', 'Quotes, finance and trade-in context'],
        'visual': 'pipeline',
        'faqs': [('Can we customise stages?', 'Yes. Dealerships can define stages that match their actual sales process.'), ('Can owners view multiple branches?', 'Yes. Dealer groups can see branch-level and consolidated performance.'), ('Does moving a lead update reports?', 'Yes. Pipeline movements are intended to persist and update the relevant reporting views.')],
    },
    'website-integration': {
        'title': 'Dealership Website and Lead Integration',
        'meta': 'Connect dealership websites, stock pages, forms, valuation funnels and campaign landing pages directly to DealershipCore.',
        'eyebrow': 'Website integration',
        'headline': 'Your dealership website should be connected to the sales floor—not sitting beside it.',
        'intro': 'DealershipCore connects website activity to stock, lead routing, response tracking and reporting so online interest becomes an operational next step.',
        'pain': 'A dealership website can look polished and still fail commercially when forms go to a shared inbox, stock becomes stale and no one can trace which pages create real opportunities.',
        'outcome': 'Live stock experiences, source-aware forms, valuation journeys and conversion reporting linked directly to dealership workflows.',
        'bullets': ['Vehicle detail pages connected to stock', 'Forms with campaign and page attribution', 'Valuation and sell-my-car funnels', 'Finance enquiry routing', 'Website health and form-status monitoring', 'Conversion data linked to dealership outcomes'],
        'visual': 'feed',
        'faqs': [('Do we need a new website?', 'Not necessarily. DealershipCore can connect to a suitable existing website, or support a purpose-built dealership website when a stronger rebuild is required.'), ('Can forms route to different branches?', 'Yes. Routing can use location, campaign, stock item or form selection.'), ('Can we track which pages generate leads?', 'Yes. Page, source and campaign data can be recorded with the lead submission.')],
    },
    'valuation-tools': {