# Lodestone

> *A living encyclopedia of astrophysics and cosmology, built from the research literature.*

Lodestone is an automatically generated wiki drawn from thousands of peer-reviewed papers in galaxy evolution, cosmology, and observational astrophysics. Each page synthesizes findings from across the literature into a coherent narrative, tracing how our understanding of a concept has developed over time, where consensus exists, and where open questions remain.

The knowledge here is grounded in the [Pathfinder corpus](https://huggingface.co/datasets/kiyer/pathfinder_arxiv_data), a curated collection of ~1M astrophysics papers on the arXiv (the same dataset used to power [Pathfinder](https://v2.pfdr.app)). Pages are generated and updated programmatically: papers are atomized into self-contained statements, routed to relevant topics, and synthesized into encyclopedia-style articles with full citations linking back to the [NASA ADS](https://ui.adsabs.harvard.edu/).

Lodestone is not a textbook. It is more akin to a reference module based on current literature, and is thus subject to some of it's nuances (including contradictions, superseded results, and active debates) in contrast to a more curated pedagogical narrative. It is recommended that you use this in complement to existing papers, search tools, and resources like Wikipedia.


> [!warning] Current limitations
> 
> 1. This is an alpha version of lodestone undergoing rapid development, made using a sub-corpus of about 100k papers broadly centered around galaxy formation. This means that while there are non-galaxy evolution pages in the wiki, they tend to be written from the lens of how they're relevant to galaxy studies (for now). Please use with caution, this will be updated with time.
>
> 2. The pages in the wiki are currently generated with a limit of 3 editor/referee iterations, which means that not all the issues flagged by the system are fully resolved. The bottom of each page has a list of unresolved issues + suggested fixes. 

---

## How to use this wiki

Each page covers a single concept: an astrophysical object class, physical process, observational phenomenon, method, dataset, or theoretical framework. Pages are linked to each other through `[[wikilinks]]`, and every factual claim carries a citation traceable to a specific paper. Use the **graph view** to explore connections between topics, or the **search bar** to find a specific concept. If there's anything factually incorrect or not quite right (or if you like something!), please click on the feedback button on the right to provide a report! 

> [!tip] Relevant papers
> 
> At the bottom of each page is a full list of all the relevant papers that were used to populate that page with content.

---

## Start exploring at [lodestone.wiki](https://lodestone.wiki/)

If you're interested in contributing, get in touch!

---

## Changelog

Ver 0.6 - Async support for different stages of running the page-creation routine. Run for a sample of hand-picked pages + the 200 most common links within them (will scale eventually). Has a routine to custom-create a paper

Ver 0.5 - Scale to ~100k papers with 'galaxy evolution' in the title/abstract. Make initial set of 'seed' pages using keywords + textbook (MvdBW) + iterative pruning, write descriptions for all seed pages and embed everything with Specter for faster routing. Better multi-stage page writer with consensus eval and iterative writer-critic-review cycle. 

Ver 0.4 - Scale to ~1k papers. Rerouting to sections is getting expensive, just store snippets as part of the Wikipage() class instance and do routing when writing the page.

Ver 0.3 - Basic version using a 100 papers with 'JWST' in the title. Making sure cross-links work, that papers are properly attributed. Ingest one paper at a time, atomize into independent statements, split across pages, reroute to the right section, and synthesize all the sections into coherent paragraphs when done.

Ver 0.1

---

## About

Lodestone is built with [Pathfinder](https://github.com/kiyer/pathfinder), [Quartz](https://quartz.jzhao.xyz/), and the Gemini API. Source code is available on [GitHub](https://github.com/kartheikiyer/lodestone). Pages are regenerated periodically as new papers are ingested.

If you find an error, a missing topic, or a result that seems outdated, the best fix is to add the relevant paper to the corpus and re-ingest.
