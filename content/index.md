---
title: "Lodestone"
tags: 
---

# Lodestone

> *A living encyclopedia of astrophysics and cosmology, built from the research literature.*

![Lodestone logo](../public/lodestone_banner1.png)

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

## Start exploring


### Instruments and surveys
- [[James Webb Space Telescope]]
- [[extragalactic-astronomical-surveys|Extragalactic Surveys]]
- [[sloan-digital-sky-survey-and-sub-surveys|SDSS and Friends]]
- [[dustpedia|Dustpedia]]

### Galaxies and their evolution
- [[high-redshift-galaxy-evolution|High-z galaxy evolution]]
- [[little-red-dots-jwst|Little Red Dots (JWST)]]
- [[star-forming-galaxies|Star-forming Galaxies]]
- [[galaxy-luminosity-function|Luminosity Function (Galaxies)]]

### Processes and mechanisms
- [[supermassive-black-holes|SMBHs]]
- [[gas-depletion-and-consumption|Gas Depletion and Consumption]]
- [[violent-disk-instability|Violent Disk Instabilities]]

### Methods
- [[sed-fitting|SED fitting]]
- [[star-formation-rate-tracers|SFR Tracers]]
- [[Photometric Redshifts]]
- [[neural-posterior-estimation|Neural Posterior Estimation]]
- [[frequentist-inference|Frequentist Inference]]

---

## About

Lodestone is built with [Pathfinder](https://github.com/kiyer/pathfinder), [Quartz](https://quartz.jzhao.xyz/), and the Gemini API. Source code is available on GitHub. Pages are regenerated periodically as new papers are ingested.

If you find an error, a missing topic, or a result that seems outdated, the best fix is to add the relevant paper to the corpus and re-ingest.
