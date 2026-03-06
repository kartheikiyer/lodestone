---
title: "Foundation models in astrophysics"
description: "Foundation models in astrophysics are large-scale, self-supervised machine learning architectures, such as vision transformers or masked autoencoders, pre-trained on massive multi-modal datasets like SDSS spectra or DESI imaging. These models provide a versatile backbone that can be fine-tuned for specific downstream tasks, including automated galaxy morphological classification, precise photometric redshift estimation, and the synthesis of multi-wavelength observations."
tags:
  - "Galaxy classification systems"
  - "Classification"
date: "2026-03-03"
draft: false
---

In recent years, the intersection of massive sky surveys and [[machine-learning-in-astronomy|Machine Learning in Astronomy]] has driven a paradigm shift from task-specific neural networks toward **foundation models**. In astrophysics, foundation models are large-scale machine learning architectures—typically based on Transformers or autoencoders—that are pre-trained on hundreds of millions of unlabeled observations from surveys such as the Sloan Digital Sky Survey (SDSS), the Dark Energy Spectroscopic Instrument (DESI), and Euclid [Euclid Collaboration et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250315312E/abstract), [Parker et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract). Unlike traditional supervised algorithms that rely on human-engineered catalogs and extensive labeled data, foundation models utilize self-supervised learning (SSL) to extract semantically meaningful, lower-dimensional representations directly from raw pixels and spectra [Hayat et al. (2020)](https://ui.adsabs.harvard.edu/abs/2021ApJ...911L..33H/abstract). By learning the underlying structure of the data without explicit human annotations, these models provide a highly versatile, general-purpose backbone that can be efficiently fine-tuned for a wide array of specialized astrophysical tasks.

At the core of these models are architectures like Vision Transformers (ViTs), Masked Autoencoders (MAEs), and Variational Autoencoders (VAEs), which are increasingly designed to be "omnimodal." Rather than processing a single data type, modern astrophysical foundation models dynamically fuse heterogeneous data—such as broadband imaging, 1D spectroscopy, and scalar photometry—into a unified representational space [Parker et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract). Training objectives typically involve contrastive learning or masked autoencoding, wherein the network is forced to reconstruct missing data fragments, thereby embedding physical relationships into a lower-dimensional latent space [Hayat et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...911L..33H/abstract), [Himes et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251022527H/abstract).

Once pre-trained, these representations achieve state-of-the-art performance on diverse downstream applications, excelling particularly in low-label regimes where only a fraction of traditional training data is available. Key applications covered in this article include automated morphological classification, the identification of rare galaxy populations, and high-precision photometric redshift ($photo\text{-}z$) and scalar property estimation. Furthermore, generative architectures leverage these learned latent spaces to synthesize realistic synthetic data [Schawinski et al. (2017)](https://ui.adsabs.harvard.edu/abs/2017MNRAS.467L.110S/abstract), allowing astronomers to translate observations across different wavelengths or predict complex optical spectra directly from broadband photometry.

Despite their rapid success, the deployment of foundation models in astrophysics presents several critical open questions for the coming decade [Huertas-Company et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023PASA...40....1H/abstract). A primary tension involves *domain shift*—the degradation in model accuracy when transferring from idealized simulated training sets to heterogeneous, instrument-specific real-world data. The field is also engaged in an active debate over the "Platonic Representation Hypothesis," weighing whether generalized vision architectures naturally converge on a fundamental representation of galaxy astrophysics, or if domain-specialized, physics-informed networks remain strictly necessary.

## Historical Development and the Shift to Self-Supervision

The integration of [[machine-learning-in-astronomy|Machine Learning in Astronomy]] initially relied heavily on manual feature engineering. Astronomers extracted structured, catalog-based parameters—such as Sérsic indices, magnitudes, and colors—to train classical statistical models. Early successes in this regime included algorithms like ANNZ, which utilized artificial neural networks acting on photometric catalogs to estimate galaxy redshifts [Pathi et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025JCAP...01..097P/abstract). While effective, these tabular methods discarded the rich, non-linear spatial information embedded in raw observational data. 

The subsequent adoption of deep learning, particularly Convolutional Neural Networks (CNNs), marked a paradigm shift toward automated feature extraction directly from pixel-level data. Deep learning models evaluating raw multi-band images consistently outperformed catalog-based approaches for physical property estimation. For example, mixed-input CNN architectures combining image data with photometry demonstrated a $30\%$ to $50\%$ improvement in photometric redshift Mean Squared Error (MSE) compared to traditional Random Forest algorithms [Henghes et al. (2021)](https://ui.adsabs.harvard.edu/abs/2022MNRAS.512.1696H/abstract). 

However, this generation of supervised networks faced a fundamental bottleneck: the insatiable requirement for labeled training data. Training robust morphological classifiers historically depended on crowdsourced annotations from massive citizen science initiatives like Galaxy Zoo [González et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018A&C....25..103G/abstract). As modern surveys began producing billions of observations, relying on human-in-the-loop labeling became intractable, severely limiting the scalability of purely supervised architectures.

To circumvent the labeling bottleneck, the field transitioned toward self-supervised learning (SSL), which leverages vast volumes of unlabeled survey data to construct semantically meaningful representations. Early applications of SSL in astrophysics utilized contrastive learning frameworks, such as Bootstrap Your Own Latent (BYOL). By forcing representations of augmented image pairs to align, contrastive learning models matched the morphological classification accuracy of state-of-the-art supervised models while requiring $2$ to $4$ times fewer human labels [Hayat et al. (2020)](https://ui.adsabs.harvard.edu/abs/2021ApJ...911L..33H/abstract). In low-label transfer regimes, hybrid contrastive pre-training has been shown to boost downstream accuracy by up to $6\%$ compared to purely supervised baselines [Walmsley et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022mla..confE..29W/abstract).

More recently, the landscape has been dominated by masked autoencoders (MAEs) and autoregressive foundation models. By masking portions of multi-band images or spectra and training the network to reconstruct the missing tokens, models develop highly versatile encoders. For instance, the AstroPT model, pre-trained on $\sim 300,000$ Euclid images and spectral energy distributions, yields representations that outperform fully supervised approaches on photometric redshift estimation even when fine-tuned with as little as $1\%$ of the available labels [Euclid Collaboration et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250315312E/abstract). 

Crucially, the shift to self-supervision has moved machine learning from a purely predictive tool to a localized discovery engine. Techniques applying Sparse Autoencoders (SAEs) to foundation model embeddings have successfully isolated interpretable, monosemantic features that automatically arrange galaxies by morphology without human intervention, often revealing rare galaxy classes that fall entirely outside the standard Galaxy Zoo classification taxonomy [Walmsley et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv231202910W/abstract), [Wu et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251023749W/abstract).

## Core Architectures: Transformers and Autoencoders

The transition toward foundation models in astrophysics has been driven by the widespread adoption of Transformer and Autoencoder architectures. These models excel at [[machine-learning-in-astronomy|representation learning]] across diverse, unlabelled data modalities, enabling astronomers to move beyond task-specific networks toward versatile encoders.

**Vision Transformers and Sequence Models**
Vision Transformers (ViTs) partition astronomical images into sequences of patch tokens, processing them via self-attention mechanisms. Initial astrophysical applications demonstrated that ViTs achieve competitive morphological classification accuracy, particularly excelling at characterizing small and faint galaxies [Yao-Yu Lin et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021arXiv211001024Y/abstract). 

Transformers have since become the backbone of foundation models that process sequential or tokenized data. For purely spectroscopic data, architectures like SpecPT have demonstrated highly accurate automated redshift measurements with catastrophic outlier fractions as low as $0.20\%$ for bright galaxy samples [Pattnaik et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025ApJ...988..139P/abstract). Recent literature suggests these general-purpose transformer architectures exhibit strong representational convergence. This supports the "Platonic Representation Hypothesis," which posits that models trained on different astronomical data types naturally converge toward a shared, underlying representation of galaxy astrophysics [UniverseTBD et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250919453U/abstract).

**Masked Autoencoders (MAEs)**
Masked Autoencoders (MAEs) are a dominant self-supervised learning paradigm in astronomy. By masking a large fraction of the input data—often up to $75\%$ of image and spectral tokens—and tasking the model with reconstructing the missing segments, MAEs learn robust physical features [Himes et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251022527H/abstract). While multi-modal MAEs successfully recover global features like galaxy shapes and broad continuum slopes, current literature notes a tension: they still struggle to reproduce fine-grained image details and specific atomic emission line strengths compared to specialized models [Himes et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251022527H/abstract). 

**Variational Autoencoders (VAEs)**
Variational Autoencoders are probabilistic generative models extensively used for non-linear dimensionality reduction. By compressing complex data into a low-dimensional latent representation, VAEs capture intrinsic physical variations without the need for labeled data. For example, VAEs have been shown to reconstruct high-resolution Sloan Digital Sky Survey (SDSS) spectra using a latent space of only $6$ parameters, outperforming traditional Principal Component Analysis (PCA) [Portillo et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....160...45P/abstract).

Conditional VAEs (CVAEs) extend this by tying the latent space to semantic parameters, such as Sersic index or stellar mass, allowing for the disentanglement of structural properties in mock galaxy images [Leung et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250715898L/abstract), [Yin et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022PASP..134d4502Y/abstract). Despite their speed and interpretability, there is an active debate regarding the generative fidelity of VAEs. When evaluated against physics-based ground truths—such as established galaxy evolution scaling relations—diffusion models generally outperform VAEs [Li et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv240707229L/abstract). Consequently, the choice between VAEs and diffusion architectures in [[computational-algorithms-and-machine-learning-in-astronomy|Computational Algorithms and Machine Learning in Astronomy]] remains highly task-dependent.

## Multi-modal Integration and Cross-Survey Learning

Recent advancements in [[machine-learning-in-astronomy|Machine Learning in Astronomy]] have driven a shift from task-specific networks toward multi-modal foundation models. These architectures perform **multi-modal fusion**—integrating heterogeneous data types such as broadband imaging, 1D spectroscopy, and scalar photometry—into a unified representational space. By leveraging massive, unlabelled datasets from diverse surveys like SDSS, DESI, and Euclid, these models provide robust encoders that map complex physical relationships across observation modalities.

A key innovation enabling this integration is **cross-modal tokenization**. Disparate data modalities are independently tokenized before being processed by a shared transformer architecture. For example, the **AION-1** model, which scales up to 3.1 billion parameters, utilizes a two-stage architecture: modality-specific tokenization followed by masked modeling of the combined cross-modal token sequences [Parker et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract). AION-1 successfully integrates over 200 million observations from five major surveys (the Legacy Survey, HSC, SDSS, DESI, and Gaia), achieving state-of-the-art performance across downstream tasks with a single frozen encoder [Parker et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract). 

Similarly, **AstroPT**, an autoregressive foundation model trained on approximately 300,000 optical and infrared images and SEDs from the Euclid Quick Data Release, uses multi-modal token-chaining to learn cross-modal associations [Euclid Collaboration et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250315312E/abstract). Other unified approaches employ dynamic masking to predict missing modalities entirely. For instance, a multi-modal transformer trained on simulated data yields a $50\%$ improvement in photo-$z$ accuracy when fusing LSST and SPHEREx photometry compared to using LSST data alone [Xia et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251007684X/abstract). Deep multi-modal fusion networks combining ResNet50 for images and MLPs for tabular data have also successfully pushed the correct estimation fraction of star formation rates from $\sim 70\%$ to $\sim 80\%$ [Gai et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.1391G/abstract).

## Applications in Galaxy Evolution and Morphology

The application of foundation models has driven a paradigm shift in the study of galaxy evolution, transitioning the field away from manual feature engineering toward end-to-end representation learning directly from raw multi-modal data. By leveraging large-scale pre-training, these models capture complex, non-linear morphological information that traditional catalog-based [[machine-learning-in-astronomy|Machine Learning in Astronomy]] methods cannot easily quantify [Parker et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract).

Quantifying structural parameters—such as the S\'ersic index, half-light radius, and ellipticity—has traditionally relied on computationally expensive profile-fitting. Deep learning approaches, including Bayesian Neural Networks and Conditional Autoencoders (CAEs), can now infer these parameters with comparable, well-calibrated uncertainties at a fraction of the computational cost [Tanoglidis et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022mla..confE..22T/abstract), [Leung et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250715898L/abstract), [Yin et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022PASP..134d4502Y/abstract). 

Because foundation models organize galaxies by visual appearance in high-dimensional latent spaces independently of human labels, they naturally facilitate the automated identification of rare or anomalous galaxy populations. Clustering techniques applied to these learned representations successfully isolate distinct, scientifically interesting morphologies [Walmsley et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv231202910W/abstract), and physics-informed Variational Autoencoders (VAEs) allow for the rapid identification of rare classes such as Green Pea and Red Spiral galaxies [Gagliano et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv231216687G/abstract). Recently, Sparse Autoencoders (SAEs) have been deployed to extract interpretable, monosemantic features from these latent spaces, identifying morphological traits that fall entirely outside standard Galaxy Zoo decision trees [Wu et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251023749W/abstract).

Generative models, particularly Diffusion models, have opened new pathways for studying galaxy formation physics by predicting optical spectra from broadband photometric images. These models successfully recover the global bimodality of star-forming and quiescent galaxies as well as the mass-metallicity relation [Doorenbos et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv240618175D/abstract), [Doorenbos et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...977..131D/abstract). Crucially, this allows for the derivation of physical properties like stellar velocity dispersion, age, and metallicity without the need for spectroscopic follow-up.

## Photometric Redshift Estimation and Scalar Property Inference

Traditionally, photometric redshifts (photo-$z$) and scalar physical properties such as stellar mass and Star Formation Rate (SFR) were derived via spectral energy distribution (SED) fitting or by applying tabular [[machine-learning-in-astronomy|Machine Learning in Astronomy]] algorithms to human-engineered catalogs. Recent literature demonstrates a paradigm shift toward extracting these parameters directly from raw multi-band pixels using deep neural networks and pre-trained foundation models. 

Incorporating spatial and morphological information natively yields significant improvements over photometry-only methods. Evaluated on large-scale datasets, image-based models reduce redshift bias by up to a factor of 10 in the $0.1 < z < 1.25$ regime [Do et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241000271D/abstract). Transfer learning is critical for pushing these models to state-of-the-art precision, particularly in low-label regimes. Parameter-efficient transfer learning techniques such as Low-Rank Adaptation (LoRA) allow models trained on abundant but noisy photometric ground truths to be fine-tuned on sparse spectroscopic data. This approach has been shown to reduce photo-$z$ bias by a factor of $\sim 2.5$ without requiring costly full network retraining [Seenivasan et al. (2026)](https://ui.adsabs.harvard.edu/abs/2026arXiv260100146S/abstract).

Despite these advances, the literature explicitly notes ongoing tensions regarding model performance at high redshifts. Accuracy drops significantly at $z > 1.5$ due to extreme data sparsity in spectroscopic training sets [Jones et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..159J/abstract). To ensure cosmological constraints remain reliable, recent works emphasize uncertainty quantification. For instance, Bayesian Convolutional Neural Networks (BCNNs) calibrated with conformal mapping provide robust statistical coverage, achieving a root-mean-square error of $0.098$ and standard outlier rates of $3.9\%$ [Jones et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..159J/abstract).

Beyond redshifts, foundation model backbones are redefining the inference of scalar physical properties. Convolutional Variational Autoencoders (CVAEs) can estimate stellar mass and SFRs $>100\times$ faster than traditional SED fitting codes, enabling rapid anomaly detection in massive survey streams [Gagliano et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv231216687G/abstract). Generative approaches like Conditional Flow Matching (CFM) further prove that conditioning posterior inference on morphological features successfully breaks classical astrophysical degeneracies, such as the long-standing age-dust degeneracy [Yunus et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251205078Y/abstract).

## Generative Modeling and Synthetic Data Synthesis

The application of generative [[machine-learning-in-astronomy|artificial intelligence]] to astrophysics marks a significant shift within Machine Learning in Astronomy, moving beyond discriminative tasks to the synthesis of complex, high-dimensional data distributions. Generative Adversarial Networks (GANs), Diffusion Models, and Variational Autoencoders (VAEs) are increasingly utilized to translate observations across wavelengths, reconstruct missing spectroscopic data, and generate high-fidelity mock catalogs that assist in the calibration of next-generation surveys.

**Image-to-Image Translation and Super-Resolution**
Generative models have demonstrated an exceptional ability to recover morphological features from low-resolution, high-noise data. For nearby galaxies ($0.01 < z < 0.02$), GANs have been shown to recover structural details from artificially degraded images with a performance that significantly exceeds the traditional Shannon-Nyquist deconvolution limit [Schawinski et al. (2017)](https://ui.adsabs.harvard.edu/abs/2017MNRAS.467L.110S/abstract). The utility of these models extends to cross-wavelength translation, mapping galaxy morphology across ultraviolet, visible, and infrared bands to augment incomplete observational datasets [Zaazou et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250115149Z/abstract). Furthermore, semi-supervised GAN architectures have been developed to explicitly learn and reconstruct high-frequency noise backgrounds, allowing synthesized images to properly emulate the instrumental and observational effects specific to surveys like SDSS and CFHT [Lin et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021arXiv210107389L/abstract). 

**Synthesizing Spectra from Photometry**
A major bottleneck in modern astrophysics is the high observational cost of spectroscopy compared to broadband photometry. Recent implementations of conditional diffusion models have successfully bridged this gap by predicting 1D optical galaxy spectra directly from 2D broadband photometric images. From these synthesized spectra, standard population synthesis techniques can accurately recover complex physical properties, including stellar velocity dispersion, metallicity, $E(B-V)$, and the $D_n(4000)$ index, while identifying the presence of an active galactic nucleus (AGN) with up to 82% accuracy [Doorenbos et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv240618175D/abstract), [Doorenbos et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...977..131D/abstract). 

**Mock Catalogs and Physical Constraints**
Generative models are also highly effective at creating realistic mock catalogs for survey planning. Diffusion models trained on LOFAR observations have been used to synthesize high-quality radio continuum maps covering $5 \times 5$ square degrees at an 8.5 arcsecond resolution, accurately reproducing the flux and angular size distributions of real radio sources [Vičánek Martínez et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250611715V/abstract). At the cosmological scale, diffusion models can probabilistically reconstruct underlying dark matter fields from biased tracers (such as stellar mass fields) while marginalizing over the uncertainties inherent in sub-grid astrophysics [Park et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv231108558P/abstract).

## Interpretability, Physics-Informed Constraints, and Uncertainty

As the application of [[machine-learning-in-astronomy|artificial intelligence]] expands in astrophysics, ensuring that foundation models generate physically plausible outputs and provide calibrated uncertainties has been identified as a primary challenge for the coming decade [Huertas-Company et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023PASA...40....1H/abstract). 

**Uncertainty Quantification**
To rigorously quantify uncertainty and prevent overconfident predictions, researchers are increasingly adopting Bayesian Neural Networks (BNNs) and simulation-based inference (SBI). For instance, BNNs applied to low-surface-brightness galaxies yield structural parameter uncertainties that are well-calibrated and comparable to traditional profile fitting, but with significantly faster inference times [Tanoglidis et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022mla..confE..22T/abstract). Furthermore, Implicit Likelihood Inference (ILI) frameworks, such as the LtU-ILI pipeline, have become standard tools for marginalizing over astrophysical uncertainties to constrain cosmology [Ho et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024OJAp....7E..54H/abstract). However, the literature notes that precision in field-level inference can still be degraded due to systematic observational effects like masking and peculiar velocities [UNSUPPORTED: by up to $10\%$]; however, studies show these models retain high performance for over $90\%$ of galaxy catalogs [de Santi et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025JCAP...01..082D/abstract).

**Physics-Informed Constraints**
Integrating strict physical laws into foundation models remains an active area of research. While generative models (such as diffusion architectures) can produce visually realistic galaxy images, they often struggle to naturally obey underlying physical scaling relations of galaxy evolution without explicit conditioning [Li et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv240707229L/abstract). Physics-informed Machine Learning in Astronomy seeks to bridge this gap through the deployment of specialized architectures like CVAEs and CFM frameworks, which reliably anchor learned relationships to accepted evolutionary mechanics.

**Interpretability and Reverse-Engineering**
To "reverse-engineer" the black-box representations learned by foundation models, astronomers are leveraging techniques like Sparse Autoencoders (SAEs) and dataset distillation. When applied to self-supervised models trained on Euclid data, SAEs successfully isolate monosemantic, interpretable visual features. Notably, these learned features often fall outside standard human-defined classification schemes, suggesting that foundation models can discover novel, data-driven physical categorizations [Wu et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251023749W/abstract). Dataset distillation provides another avenue for interpretability by synthesizing prototypical images that highlight the exact morphological features the network uses for classification [Guan et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv231117967G/abstract). Furthermore, dimensionality reduction using VAEs has shown that complex, high-dimensional data like SDSS spectra can be reconstructed using as few as six latent parameters, creating a highly compact, interpretable latent space [Portillo et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....160...45P/abstract).

## Open Questions and Future Directions

The rapid integration of foundation models into [[machine-learning-in-astronomy|Machine Learning in Astronomy]] has exposed several unresolved challenges, most notably uncertainty quantification, interpretability, and domain shift [Huertas-Company et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023PASA...40....1H/abstract). 

**Domain shift** poses a particularly severe hurdle for observational deployment. Models trained on idealized cosmological simulations or specific instrumental surveys often struggle when applied to real, heterogeneous data. Systematic observational effects, such as survey masking and uncertainties in peculiar velocities, have been shown to degrade the precision of field-level inference models [UNSUPPORTED: by up to $10\%$], though recent frameworks maintain high robustness for over $90\%$ of generated catalogs [de Santi et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025JCAP...01..082D/abstract). Furthermore, relying on representations learned from non-astronomical datasets (e.g., ImageNet) can introduce distribution shifts that actively degrade performance on specialized tasks like radio galaxy classification [UNSUPPORTED: identification using standard [[object-detection-algorithms|Object detection algorithms]]], even while other detection algorithms remain competitive [Lastufka et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv240911175L/abstract). Achieving **instrument invariance** remains an active area of research, with mitigation strategies utilizing parameter-efficient fine-tuning like LoRA [Seenivasan et al. (2026)](https://ui.adsabs.harvard.edu/abs/2026arXiv260100146S/abstract) and hybrid contrastive learning frameworks [Walmsley et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022mla..confE..29W/abstract).

Another prominent open question centers on **model scaling** and architectural necessity: must astrophysics rely entirely on custom-built networks, or can it adapt general-purpose vision models? Empirical tests of the "Platonic Representation Hypothesis" suggest that as disparate foundation models scale in capacity, their learned representations naturally converge toward a shared underlying geometric reality of galaxy astrophysics, regardless of whether the architecture is vision-general or astronomy-specific [UniverseTBD et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250919453U/abstract). This implies that advances from the broader [[computational-algorithms-and-machine-learning-in-astronomy|Computational Algorithms and Machine Learning in Astronomy]] ecosystem can be directly imported. Conversely, other studies find that while general architectures capture broad continuum slopes and overall morphology, they still fail to accurately reproduce fine-grained physical features, such as specific atomic emission line strengths, when compared to domain-specific multi-modal models [Himes et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251022527H/abstract).

**Generalization** is also fundamentally constrained by the availability of high-quality labels in certain cosmic regimes. For instance, the performance of deep learning models on photometric redshift estimation drops significantly at high redshifts ($z > 1.5$) due to severe data sparsity in spectroscopic training sets [Jones et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..159J/abstract), [Do et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241000271D/abstract). 

Looking forward, a major direction for the field is achieving true "omnimodality." Current state-of-the-art models, such as the $3.1 \times 10^9$-parameter AION-1, successfully integrate imaging, spectra, and scalar catalogs into a single frozen encoder [Parker et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract). However, fully capturing the astrophysics of galaxy evolution and cosmology will likely require the incorporation of inherently unstructured data, such as 3D density fields and dark matter merger trees [Xia et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251007684X/abstract). Finally, establishing standardized frameworks for uncertainty quantification remains a critical prerequisite before foundation models can be entirely trusted to marginalize over subgrid astrophysical uncertainties and deliver robust, unbiased cosmological constraints [Huertas-Company et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023PASA...40....1H/abstract), [Perez et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJ...954...11P/abstract).


## Known Issues

*This article was auto-generated by [Lodestone](https://github.com/lodestone) and has not fully passed editorial review.*

> [!warning] Reviewer Notes
> This article has **5** flagged issue(s) (severity: **major**).
>
> **1. [factual error]** in *Interpretability, Physics-Informed Constraints, and Uncertainty*
> The text contains an unresolved editorial artifact ('[UNSUPPORTED: ...]') left over from the drafting process. This breaks the academic prose and leaves internal editor notes visible in the final article.
> → *Suggested fix:* Remove the bracketed editorial artifact and seamlessly state that systematic effects degrade precision, though the models retain high performance for over 90% of catalogs.
>
> **2. [factual error]** in *Open Questions and Future Directions*
> Similar to the previous section, the author's internal drafting notes/flags were accidentally included verbatim in the main text.
> → *Suggested fix:* Delete the bracketed '[UNSUPPORTED: by up to $10\%$]' text.
>
> **3. [factual error]** in *Open Questions and Future Directions*
> The text contains a third unresolved editorial artifact, which awkwardly swallows the wiki link for 'Object detection algorithms' and breaks the grammar of the sentence.
> → *Suggested fix:* Remove the bracketed artifact and rewrite the sentence to clearly reflect Lastufka (2024), which found that foundation models perform poorly on radio galaxy classification but excel in object detection tasks.
>
> **4. [factual error]** in *Photometric Redshift Estimation and Scalar Property Inference*
> The sentence incorrectly implies that the ~2.5x bias reduction is relative to the baseline of 'full network retraining'. The abstract for 2026arXiv260100146S explicitly states that LoRA achieves ~2.5x less bias compared to a 'traditional transfer learning method', and notes that full network retraining actually generalizes better than LoRA.
> → *Suggested fix:* Clarify that the ~2.5x improvement is compared to traditional transfer learning methods, rather than full network retraining.
>
> **5. [factual error]** in *Core Architectures: Transformers and Autoencoders*
> The text attributes the disentanglement of structural properties in these citations to Conditional Variational Autoencoders (CVAEs). However, both Leung (2025) and Yin (2022) specifically utilize non-probabilistic Conditional Autoencoders (CAEs), not CVAEs.
> → *Suggested fix:* Change 'Conditional VAEs (CVAEs)' to 'Conditional Autoencoders (CAEs)' to accurately reflect the architectures used in the cited papers.
>

> [!todo] Papers Not Yet Incorporated
> **19** relevant paper(s) could not be fully integrated:
>
> - [The Foundation Supernova Survey: Photospheric Velocity Correlations in Type Ia Supernovae](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..267D/abstract) (`2021ApJ...923..267D`)
>   - Suggested section: *Historical Development and the Shift to Self-Supervision*
>   - Mention the Foundation Supernova Survey as an example of large-scale spectroscopic data releases used to study ejecta velocity correlations and host-galaxy stellar mass relationships.
> - [Panchromatic properties of galaxies in wide-field optical spectroscopic and photometric surveys](https://ui.adsabs.harvard.edu/abs/2012IAUS..284..268D/abstract) (`2012IAUS..284..268D`)
>   - Suggested section: *Historical Development and the Shift to Self-Supervision*
>   - Provide context on the 'explosion' of redshifts and panchromatic imaging surveys over the last 15 years that laid the empirical groundwork for foundation models.
> - [Augmenting machine learning photometric redshifts with Gaussian mixture models](https://ui.adsabs.harvard.edu/abs/2020MNRAS.498.5498H/abstract) (`2020MNRAS.498.5498H`)
>   - Suggested section: *Photometric Redshift Estimation and Scalar Property Inference*
>   - Note that augmenting ML algorithms like GPz with Gaussian Mixture Models to account for differing color-magnitude distributions can reduce redshift bias by up to half.
> - [The PAU Survey: Photometric redshifts using transfer learning from simulations](https://ui.adsabs.harvard.edu/abs/2020MNRAS.497.4565E/abstract) (`2020MNRAS.497.4565E`)
>   - Suggested section: *Photometric Redshift Estimation and Scalar Property Inference*
>   - Incorporate the DEEPZ code, which uses transfer learning from simulations and autoencoders for SED feature extraction to reduce scatter by 50% in the PAU survey.
> - [Morpho-photometric redshifts](https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.4802M/abstract) (`2019MNRAS.489.4802M`)
>   - Suggested section: *Photometric Redshift Estimation and Scalar Property Inference*
>   - Discuss 'morpho-photometric' models that split MLP and CNN branches to disentangle strong photometric signals from weaker morphological features for improved redshift bias.
> - [A Self-consistent Data-driven Model for Determining Stellar Parameters from Optical and Near-infrared Spectra](https://ui.adsabs.harvard.edu/abs/2024AJ....167..173S/abstract) (`2024AJ....167..173S`)
>   - Suggested section: *Multi-modal Integration and Cross-Survey Learning*
>   - Describe label transfer techniques between BOSS (optical) and APOGEE (near-IR) spectra to ensure self-consistent stellar parameter estimation across wavelength regimes.
> - [Galaxy Spectra neural Network (GaSNet). II. Using deep learning for spectral classification and redshift predictions](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532..643Z/abstract) (`2024MNRAS.532..643Z`)
>   - Suggested section: *Core Architectures: Transformers and Autoencoders*
>   - Mention GaSNet-II as a multinetwork tool capable of identifying 13 object classes and predicting redshifts with high efficiency suitable for real-time survey feedback.
> - [Applications of AI in Astronomy](https://ui.adsabs.harvard.edu/abs/2022arXiv221201493D/abstract) (`2022arXiv221201493D`)
>   - Suggested section: *Historical Development and the Shift to Self-Supervision*
>   - Reference the historical transition from the digital sky surveys of the 1990s to the current petascale data streams requiring human-AI collaborative discovery.
> - [Generating synthetic star catalogs from simulated data for next-gen observatories with py-ananke](https://ui.adsabs.harvard.edu/abs/2023arXiv231202268T/abstract) (`2023arXiv231202268T`)
>   - Suggested section: *Generative Modeling and Synthetic Data Synthesis*
>   - Introduce py-ananke as a pipeline for generating synthetic resolved stellar surveys from cosmological simulations, assisting in preparation for facilities like Euclid and JWST.
> - [Preliminary Report on Mantis Shrimp: a Multi-Survey Computer Vision Photometric Redshift Model](https://ui.adsabs.harvard.edu/abs/2024arXiv240203535E/abstract) (`2024arXiv240203535E`)
>   - Suggested section: *Multi-modal Integration and Cross-Survey Learning*
>   - Detail the Mantis Shrimp model which fuses UV (GALEX), optical (PanSTARRS), and IR (UnWISE) imagery to improve computer-vision based photometric redshifts.
> - [Photometric Analysis for Predicting Star Formation Rates in Large Galaxies Using Machine Learning and Deep Learning Techniques](https://ui.adsabs.harvard.edu/abs/2024arXiv241006736R/abstract) (`2024arXiv241006736R`)
>   - Suggested section: *Photometric Redshift Estimation and Scalar Property Inference*
>   - Summarize the comparison of diverse models (Linear Regression, LSTM, SVR) for SFR estimation, showing that ML can achieve high accuracy even with only photometric data.
> - [Euclid Quick Data Release (Q1). The Strong Lensing Discovery Engine C -- Finding lenses with machine learning](https://ui.adsabs.harvard.edu/abs/2025arXiv250315326E/abstract) (`2025arXiv250315326E`)
>   - Suggested section: *Applications in Galaxy Evolution and Morphology*
>   - Highlight the discovery of hundreds of strong lenses in the Euclid Q1 release using fine-tuned Zoobot foundation models.
> - [A catalog to unite them all: REGALADE, a revised galaxy compilation for the advanced detector era](https://ui.adsabs.harvard.edu/abs/2025arXiv250813267T/abstract) (`2025arXiv250813267T`)
>   - Suggested section: *Multi-modal Integration and Cross-Survey Learning*
>   - Mention the REGALADE catalog, which combines major surveys to provide a high-completeness all-sky map for multi-messenger astrophysics.
> - [Improved photometric redshift estimations through self-organising map-based data augmentation](https://ui.adsabs.harvard.edu/abs/2025arXiv250820903Z/abstract) (`2025arXiv250820903Z`)
>   - Suggested section: *Photometric Redshift Estimation and Scalar Property Inference*
>   - Discuss the use of Self-Organising Maps (SOMs) for data augmentation to fill sparsely sampled regions of SED space, reducing catastrophic photo-z failures for high-redshift galaxies.
> - [Large eddy simulations in astrophysics](https://ui.adsabs.harvard.edu/abs/2025arXiv250906801S/abstract) (`2025arXiv250906801S`)
>   - Suggested section: *Interpretability, Physics-Informed Constraints, and Uncertainty*
>   - Note the methodology of large eddy simulations (LES) and subgrid-scale (SGS) models as tools for computing energy dissipation and mixing in cosmological fluids.
> - [Beyond No Tension: JWST z > 10 Galaxies Push Simulations to the Limit](https://ui.adsabs.harvard.edu/abs/2025arXiv250907695M/abstract) (`2025arXiv250907695M`)
>   - Suggested section: *Applications in Galaxy Evolution and Morphology*
>   - Address the tension between high-redshift (z > 10) JWST observations and cosmological simulations, noting cases where simulations can or cannot account for extreme stellar masses.
> - [GalSBI: phenomenological galaxy population model for cosmology using simulation-based inference](https://ui.adsabs.harvard.edu/abs/2025JCAP...06..007F/abstract) (`2025JCAP...06..007F`)
>   - Suggested section: *Interpretability, Physics-Informed Constraints, and Uncertainty*
>   - Introduce GalSBI as a fully open-source phenomenological model for simulation-based inference that predicts detection probabilities and photometric properties.
> - [OmniCosmos: Transferring Particle Physics Knowledge Across the Cosmos](https://ui.adsabs.harvard.edu/abs/2025arXiv251224422M/abstract) (`2025arXiv251224422M`)
>   - Suggested section: *Multi-modal Integration and Cross-Survey Learning*
>   - Mention OmniCosmos as the first instance of a foundation model trained on collider physics data successfully generalizing to predict cosmological parameters and halo velocities.
> - [Optimization of Deep Learning Models for Radio Galaxy Classification](https://ui.adsabs.harvard.edu/abs/2026arXiv260104773D/abstract) (`2026arXiv260104773D`)
>   - Suggested section: *Open Questions and Future Directions*
>   - Reference the use of standard pretrained DL architectures for radio galaxy classification in the context of upcoming SKAO data, achieving accuracy on par with customized models.

---

## References

- Anile et al. (1989). *Relativistic Fluid Dynamics*. [ADS](https://ui.adsabs.harvard.edu/abs/1989LNM..1385.....A/abstract)
- Aparicio et al. (1998). *Stellar astrophysics for the local group : VIII Canary Islands Winter School of Astrophysics*. [ADS](https://ui.adsabs.harvard.edu/abs/1998salg.conf.....A/abstract)
- Boddy et al. (2018). *Model-independent constraints on dark matter annihilation in dwarf spheroidal galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2018PhRvD..97i5031B/abstract)
- Chiarusi et al. (2010). *High-energy astrophysics with neutrino telescopes*. [ADS](https://ui.adsabs.harvard.edu/abs/2010EPJC...65..649C/abstract)
- Constantin et al. (2001). *Emission-Line Properties of z&gt;4 Quasars*. [ADS](https://ui.adsabs.harvard.edu/abs/2002ApJ...565...50C/abstract)
- de Santi et al. (2025). *Field-level simulation-based inference with galaxy catalogs: the impact of systematic effects*. [ADS](https://ui.adsabs.harvard.edu/abs/2025JCAP...01..082D/abstract)
- Denzel et al. (2026). *Optimization of Deep Learning Models for Radio Galaxy Classification*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260104773D/abstract)
- Dettman et al. (2021). *The Foundation Supernova Survey: Photospheric Velocity Correlations in Type Ia Supernovae*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..267D/abstract)
- Djorgovski et al. (2022). *Applications of AI in Astronomy*. [ADS](https://ui.adsabs.harvard.edu/abs/2022arXiv221201493D/abstract)
- Do et al. (2024). *GalaxiesML: a dataset of galaxy images, photometry, redshifts, and structural parameters for machine learning*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241000271D/abstract)
- Doorenbos et al. (2024). *Galaxy spectroscopy without spectra: Galaxy properties from photometric images with conditional diffusion models*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240618175D/abstract)
- Doorenbos et al. (2024). *Galaxy Spectroscopy without Spectra: Galaxy Properties from Photometric Images with Conditional Diffusion Models*. [ADS](https://ui.adsabs.harvard.edu/abs/2024ApJ...977..131D/abstract)
- Driver et al. (2011). *Panchromatic properties of galaxies in wide-field optical spectroscopic and photometric surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2012IAUS..284..268D/abstract)
- Engel et al. (2024). *Preliminary Report on Mantis Shrimp: a Multi-Survey Computer Vision Photometric Redshift Model*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240203535E/abstract)
- Eriksen et al. (2020). *The PAU Survey: Photometric redshifts using transfer learning from simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2020MNRAS.497.4565E/abstract)
- Euclid Collaboration et al. (2025). *Euclid Quick Data Release (Q1) Exploring galaxy properties with a multi-modal foundation model*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250315312E/abstract)
- Euclid Collaboration et al. (2025). *Euclid Quick Data Release (Q1). The Strong Lensing Discovery Engine C -- Finding lenses with machine learning*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250315326E/abstract)
- Fischbacher et al. (2025). *GalSBI: phenomenological galaxy population model for cosmology using simulation-based inference*. [ADS](https://ui.adsabs.harvard.edu/abs/2025JCAP...06..007F/abstract)
- Gagliano et al. (2023). *A Physics-Informed Variational Autoencoder for Rapid Galaxy Inference and Anomaly Detection*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231216687G/abstract)
- Gai et al. (2024). *Simultaneous derivation of galaxy physical properties with multimodal deep learning*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.1391G/abstract)
- Ginzburg et al. (1996). *METHODOLOGICAL NOTES:  Cosmic ray astrophysics (history and general review)*. [ADS](https://ui.adsabs.harvard.edu/abs/1996PhyU...39..155G/abstract)
- González et al. (2018). *Galaxy detection and identification using deep learning and data augmentation*. [ADS](https://ui.adsabs.harvard.edu/abs/2018A&C....25..103G/abstract)
- Goriely et al. (1999). *Uncertainties in the Th cosmochronometry*. [ADS](https://ui.adsabs.harvard.edu/abs/1999A&A...346..798G/abstract)
- Guan et al. (2023). *Discovering Galaxy Features via Dataset Distillation*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231117967G/abstract)
- Hartquist et al. (1998). *The molecular astrophysics of stars and galaxies.*. [ADS](https://ui.adsabs.harvard.edu/abs/1998ISAA....4.....H/abstract)
- Hatfield et al. (2020). *Augmenting machine learning photometric redshifts with Gaussian mixture models*. [ADS](https://ui.adsabs.harvard.edu/abs/2020MNRAS.498.5498H/abstract)
- Hayat et al. (2020). *Self-supervised Representation Learning for Astronomical Images*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...911L..33H/abstract)
- Henghes et al. (2021). *Deep learning methods for obtaining photometric redshift estimations from images*. [ADS](https://ui.adsabs.harvard.edu/abs/2022MNRAS.512.1696H/abstract)
- Himes et al. (2025). *Multi-Modal Masked Autoencoders for Learning Image-Spectrum Associations for Galaxy Evolution and Cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251022527H/abstract)
- Ho et al. (2024). *LtU-ILI: An All-in-One Framework for Implicit Inference in Astrophysics and Cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2024OJAp....7E..54H/abstract)
- Huertas-Company et al. (2023). *The Dawes Review 10: The impact of deep learning for the analysis of galaxy surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2023PASA...40....1H/abstract)
- Jones et al. (2024). *Redshift Prediction with Images for Cosmology Using a Bayesian Convolutional Neural Network with Conformal Predictions*. [ADS](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..159J/abstract)
- Kassim et al. (1990). *Low frequency astrophysics from space : proceedings of an international workshop held in Crystal City, Virginia, USA, on 8 and 9 January 1990*. [ADS](https://ui.adsabs.harvard.edu/abs/1990LNP...362.....K/abstract)
- Kennicutt et al. (2005). *The role of massive stars in astrophysics*. [ADS](https://ui.adsabs.harvard.edu/abs/2005IAUS..227....3K/abstract)
- Lastufka et al. (2024). *Bridging the Gap: Examining Vision Foundation Models for Optical and Radio Astronomy Applications*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240911175L/abstract)
- Leung et al. (2025). *A Generative Model for Disentangling Galaxy Photometric Parameters*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250715898L/abstract)
- Li et al. (2024). *Using Galaxy Evolution as Source of Physics-Based Ground Truth for Generative Models*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240707229L/abstract)
- Lin et al. (2021). *Galaxy Image Translation with Semi-supervised Noise-reconstructed Generative Adversarial Networks*. [ADS](https://ui.adsabs.harvard.edu/abs/2021arXiv210107389L/abstract)
- Longair et al. (1992). *High energy astrophysics. Vol.1: Particles, photons and their detection*. [ADS](https://ui.adsabs.harvard.edu/abs/1992hea..book.....L/abstract)
- Longair et al. (1994). *High energy astrophysics. Vol.2: Stars, the galaxy and the interstellar medium*. [ADS](https://ui.adsabs.harvard.edu/abs/1994hea..book.....L/abstract)
- Mahmud Pathi et al. (2024). *ANNZ+: an enhanced photometric redshift estimation algorithm with applications on the PAU Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240909981M/abstract)
- McCaffrey et al. (2025). *Beyond No Tension: JWST z &gt; 10 Galaxies Push Simulations to the Limit*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250907695M/abstract)
- Menou et al. (2018). *Morpho-photometric redshifts*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.4802M/abstract)
- Merritt et al. (2013). *Dynamics and Evolution of Galactic Nuclei*. [ADS](https://ui.adsabs.harvard.edu/abs/2013degn.book.....M/abstract)
- Mikuni et al. (2025). *OmniCosmos: Transferring Particle Physics Knowledge Across the Cosmos*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251224422M/abstract)
- Mirabel et al. (2007). *Microquasars: Progress made and open questions*. [ADS](https://ui.adsabs.harvard.edu/abs/2007astro.ph..1837M/abstract)
- Méndez et al. (1999). *Faint Blue Objects on the Hubble Deep Field North and South as Possible Nearby Old Halo White Dwarfs*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...529..911M/abstract)
- Panther et al. (2019). *Gamma-ray lines in modern astrophysics*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MmSAI..90..276P/abstract)
- Park et al. (2023). *Probabilistic reconstruction of Dark Matter fields from biased tracers using diffusion models*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231108558P/abstract)
- Parker et al. (2025). *AION-1: Omnimodal Foundation Model for Astronomical Sciences*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251017960P/abstract)
- Pathi et al. (2025). *ANNZ+: an enhanced photometric redshift estimation algorithm with applications on the PAU survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2025JCAP...01..097P/abstract)
- Pattnaik et al. (2025). *SpecPT (Spectroscopy Pre-trained Transformer) Model for Extragalactic Spectroscopy. I. Architecture and Automated Redshift Measurement*. [ADS](https://ui.adsabs.harvard.edu/abs/2025ApJ...988..139P/abstract)
- Perez et al. (2022). *Constraining Cosmology with Machine Learning and Galaxy Clustering: The CAMELS-SAM Suite*. [ADS](https://ui.adsabs.harvard.edu/abs/2023ApJ...954...11P/abstract)
- Portillo et al. (2020). *Dimensionality Reduction of SDSS Spectra with Variational Autoencoders*. [ADS](https://ui.adsabs.harvard.edu/abs/2020AJ....160...45P/abstract)
- Raghav et al. (2024). *Photometric Analysis for Predicting Star Formation Rates in Large Galaxies Using Machine Learning and Deep Learning Techniques*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241006736R/abstract)
- Schawinski et al. (2017). *Generative adversarial networks recover features in astrophysical images of galaxies beyond the deconvolution limit*. [ADS](https://ui.adsabs.harvard.edu/abs/2017MNRAS.467L.110S/abstract)
- Schmidt-Brückner et al. (2025). *Large eddy simulations in astrophysics*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250906801S/abstract)
- Seenivasan et al. (2026). *Combining datasets with different ground truths using Low-Rank Adaptation to generalize image-based CNN models for photometric redshift prediction*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260100146S/abstract)
- Sizemore et al. (2024). *A Self-consistent Data-driven Model for Determining Stellar Parameters from Optical and Near-infrared Spectra*. [ADS](https://ui.adsabs.harvard.edu/abs/2024AJ....167..173S/abstract)
- Tanoglidis et al. (2022). *Inferring Structural Parameters of Low-Surface-Brightness-Galaxies with Uncertainty Quantification using Bayesian Neural Networks*. [ADS](https://ui.adsabs.harvard.edu/abs/2022mla..confE..22T/abstract)
- Thob et al. (2023). *Generating synthetic star catalogs from simulated data for next-gen observatories with py-ananke*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231202268T/abstract)
- Thob et al. (2024). *Generating synthetic star catalogs from simulated data for next-gen observatories with py-ananke*. [ADS](https://ui.adsabs.harvard.edu/abs/2024JOSS....9.6234T/abstract)
- Tranin et al. (2025). *A catalog to unite them all: REGALADE, a revised galaxy compilation for the advanced detector era*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250813267T/abstract)
- UniverseTBD et al. (2025). *The Platonic Universe: Do Foundation Models See the Same Sky?*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250919453U/abstract)
- Vičánek Martínez et al. (2025). *Simulating realistic radio continuum survey maps with diffusion models*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250611715V/abstract)
- Wadsley et al. (2018). *On the treatment of entropy mixing in numerical cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2008MNRAS.387..427W/abstract)
- Walmsley et al. (2022). *Toward Galaxy Foundation Models with Hybrid Contrastive Learning*. [ADS](https://ui.adsabs.harvard.edu/abs/2022mla..confE..29W/abstract)
- Walmsley et al. (2023). *Rare Galaxy Classes Identified In Foundation Model Representations*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231202910W/abstract)
- WGLA et al. (2009). *New Discoveries in Cosmology and Fundamental Physics through Advances in Laboratory Astrophysics*. [ADS](https://ui.adsabs.harvard.edu/abs/2009arXiv0902.4666W/abstract)
- WGLA et al. (2009). *New Discoveries in Galaxies across Cosmic Time through Advances in Laboratory Astrophysics*. [ADS](https://ui.adsabs.harvard.edu/abs/2009arXiv0902.4681W/abstract)
- Wu et al. (2025). *Re-envisioning Euclid Galaxy Morphology: Identifying and Interpreting Features with Sparse Autoencoders*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251023749W/abstract)
- Xia et al. (2025). *Multi-modal Foundation Model for Cosmological Simulation Data*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251007684X/abstract)
- Yao-Yu Lin et al. (2021). *Galaxy Morphological Classification with Efficient Vision Transformer*. [ADS](https://ui.adsabs.harvard.edu/abs/2021arXiv211001024Y/abstract)
- Yin et al. (2022). *A Conditional Autoencoder for Galaxy Photometric Parameter Estimation*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PASP..134d4502Y/abstract)
- Yunus et al. (2025). *Improving Posterior Inference of Galaxy Properties with Image-Based Conditional Flow Matching*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251205078Y/abstract)
- Zaazou et al. (2025). *Mapping Galaxy Images Across Ultraviolet, Visible and Infrared Bands Using Generative Deep Learning*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250115149Z/abstract)
- Zhang et al. (2025). *Improved photometric redshift estimations through self-organising map-based data augmentation*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250820903Z/abstract)
- Zhong et al. (2024). *Galaxy Spectra neural Network (GaSNet). II. Using deep learning for spectral classification and redshift predictions*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532..643Z/abstract)

<!-- Generated by Lodestone | iterations: 3 | converged: False | coverage: 0.67 | date: 2026-03-03T21:35:33Z -->
