---
title: "Galaxy Bias and Clustering Statistics"
description: "Galaxy bias quantifies the relationship between the spatial distribution of luminous galaxies and the underlying dark matter density field, typically characterized by a bias parameter representing the ratio of their respective fluctuations. Clustering statistics, such as n-point correlation functions and power spectra, provide the mathematical framework to measure this distribution and constrain cosmological parameters through large-scale structure surveys."
tags:
  - "Dark matter density"
  - "Matter density"
  - "Dwarf elliptical galaxies"
  - "Clustering"
  - "Surveys"
  - "Cosmological parameters from large-scale structure"
date: "2026-03-06"
draft: false
---

In cosmology, **galaxy bias** quantifies the statistical relationship between the spatial distribution of [[bright-galaxies|Bright galaxies]] and the underlying [[three-dimensional-cosmic-density-fields|Three-dimensional cosmic density fields]]. Because galaxies preferentially form and evolve within the deep gravitational potential wells of [[dark-matter-halo-properties-and-statistics|Dark Matter Halo Properties and Statistics]], they act as biased tracers of the [[galaxy-structure|Galaxy structure]] rather than perfect proxies for the [[mass-distribution-and-functions|Mass Distribution and Functions]]. The mathematical framework used to measure this phenomenon is grounded in **clustering statistics**, most notably the [[two-point-correlation-function|Two-point correlation function]] and its Fourier-space counterpart, the [[cosmological-power-spectrum|Cosmological power spectrum]]. By treating the observed galaxy distribution as a discrete point process that samples a continuous underlying density field [Peebles et al. (1980)](https://ui.adsabs.harvard.edu/abs/1980NYASA.336..161P/abstract), astrophysicists can reconstruct the evolution of [[low-redshift-large-scale-structure|Low-redshift large-scale structure]] and extract robust constraints on fundamental cosmological parameters, including the [[matter-density-pdf|Matter density PDF]] and the amplitude of [[f-8|fσ8]].

The precise magnitude and scale-dependence of galaxy bias are deeply intertwined with the physics of galaxy formation. Observational evidence demonstrates that clustering strength is a multivariate function of intrinsic [[galaxy-properties|Galaxy properties]]: highly luminous, red, and massive galaxies exhibit significantly higher clustering amplitudes than their fainter, bluer, and star-forming counterparts [Zehavi et al. (2010)](https://ui.adsabs.harvard.edu/abs/2011ApJ...736...59Z/abstract). To bridge the gap between observed galaxies and theoretical cosmology, researchers heavily rely on the Halo Occupation Distribution (HOD) framework, which models the probability of a dark matter halo hosting a certain number of galaxies. While halo mass is the primary driver of this relationship, modern high-precision data have revealed the necessity of modeling "assembly bias"—the phenomenon where [[halo-matter-bias|Halo-matter bias]] and galaxy clustering depend on secondary halo properties, such as formation history, spin, and concentration, often modeled via [[anisotropic-galaxy-assembly-bias|Anisotropic galaxy assembly bias]]. 

Beyond mapping the galaxy-halo connection, clustering statistics derived from massive [[cosmic-surveys|Cosmic surveys]] serve as premier tools for testing the standard cosmological model. For instance, the [[peculiar-velocity-field|Peculiar velocity field]] of galaxies falling into large-scale [[galaxy-overdensities|Galaxy overdensities]] induce [[redshift-space-distortions|Redshift-space distortions]] (RSD) along the observer's line of sight. By measuring these anisotropic clustering signals, cosmologists can directly probe the linear growth rate of structure, providing a rigorous test of General Relativity on cosmic scales [Kaiser et al. (1987)](https://ui.adsabs.harvard.edu/abs/1987MNRAS.227....1K/abstract). However, extracting these delicate signals requires meticulous mitigation of observational systematics, such as blending, magnification bias, and [[sample-variance|Sample variance]], which can otherwise masquerade as physical anomalies or artificially distort the large-scale clustering amplitude.

Today, the field is rapidly advancing beyond traditional two-point estimators, utilizing [[higher-order-clustering-statistics|Higher-Order Clustering Statistics]] such as the [[reduced-bispectrum|Reduced bispectrum]] and the [[n-point-correlation-function|N-point correlation function]] to break persistent degeneracies between galaxy bias, primordial non-Gaussianity, and the amplitude of mass fluctuations. As observations push to unprecedented depths and scales, several major open questions have emerged. Researchers are currently working to resolve a persistent $4\sigma$ tension when fitting standard HOD models to small-scale clustering, properly model the scale-dependent bias induced by massive neutrinos, and determine whether the extremely luminous, high-redshift galaxies recently discovered by JWST represent a genuine tension with the $\Lambda$CDM paradigm or simply an underestimation of early-universe [[sample-variance|Sample variance]].

## Mathematical Foundations of Clustering Statistics

The spatial distribution of galaxies can be modeled mathematically as a discrete [[poisson-point-process|Poisson point process]] that samples an underlying continuous matter density field [Peebles et al. (1980)](https://ui.adsabs.harvard.edu/abs/1980NYASA.336..161P/abstract). To quantify this spatial clustering, the foundational metric is the [[two-point-correlation-function|Two-point correlation function]], $\xi(r)$, which measures the excess probability—relative to a purely random, uniform distribution—of finding two galaxies separated by a comoving distance $r$. Mathematically, the joint probability $dP$ of finding two galaxies in infinitesimal volume elements $dV_1$ and $dV_2$ is defined as:
$$dP = \bar{n}^2 [1 + \xi(r)] dV_1 dV_2$$
where $\bar{n}$ is the mean [[number-density|Number density]] of the galaxy sample.

In practice, measuring $\xi(r)$ from observational catalogs requires comparing the observed distribution to a simulated random catalog that perfectly mimics the survey's angular mask and [[selection-function|Selection function]]. This is typically achieved using the minimum-variance Landy-Szalay estimator, a refined form of the [[peebles-estimator|Peebles estimator]]:
$$\hat{\xi}(r) = \frac{DD(r) - 2DR(r) + RR(r)}{RR(r)}$$
where $DD$, $DR$, and $RR$ are the properly normalized counts of data-data, data-random, and random-random pairs in separation bins. Recent methodological advancements have also introduced continuous-function generalizations of this estimator to prevent the loss of information caused by using hard-edged separation bins [Storey-Fisher et al. (2020)](https://ui.adsabs.harvard.edu/abs/2021ApJ...909..220S/abstract).

An equivalent description of large-scale structure exists in Fourier space via the [[cosmological-power-spectrum|Cosmological power spectrum]], $P(k)$. The power spectrum is the Fourier transform of the correlation function and describes the variance of the density fluctuation field $\delta(\mathbf{x})$ as a function of wavenumber $k$:
$$\langle \delta(\mathbf{k}) \delta(\mathbf{k'}) \rangle = (2\pi)^3 P(k) \delta_D(\mathbf{k} + \mathbf{k'})$$
Formulating clustering via $P(k)$ is highly advantageous on large, linear scales because different Fourier modes evolve independently, thereby sidestepping the mode-mixing across different spatial scales that is inherent to the real-space $\xi(r)$.

Alternatively, the clustering amplitude can be evaluated using counts-in-cells statistics, which measure the variance $\sigma^2(R)$ of galaxy counts within spherical volumes of radius $R$. This approach directly links to the volume integral of $\xi(r)$ and provides a robust, non-parametric method for recovering the [[local-bias-models|Local bias models]] down to highly nonlinear scales [Szapudi et al. (2003)](https://ui.adsabs.harvard.edu/abs/2004ApJ...602...26S/abstract).

Because three-dimensional distance measurements rely on observed redshifts, the [[peculiar-velocity-field|Peculiar velocity field]] of galaxies perturb their line-of-sight coordinates, introducing [[redshift-space-distortions|Redshift-space distortions]] [Kaiser et al. (1987)](https://ui.adsabs.harvard.edu/abs/1987MNRAS.227....1K/abstract). To extract the true real-space clustering, analysts often integrate out the line-of-sight coordinate to compute the projected correlation function, $w_p(r_p)$. For purely photometric datasets where precise redshifts are unavailable, the three-dimensional distribution is projected onto the sky, and clustering is quantified using the [[angular-power-spectrum|Angular power spectrum]] or the [[angular-correlation-and-clustering|Angular Correlation and Clustering]], $w(\theta)$, which can be related back to the 3D power spectrum via the Limber equation.

While two-point statistics fully describe a Gaussian random field, nonlinear gravitational collapse and the complex nature of galaxy bias inject significant non-Gaussian information into the density field. To break degeneracies between cosmological parameters (e.g., the amplitude of mass fluctuations, $\sigma_8$) and galaxy bias, analysts increasingly rely on higher-order statistics such as the [[three-point-correlation-function|Three-point correlation function]] and its Fourier-space counterpart, the bispectrum [Zheng et al. (2004)](https://ui.adsabs.harvard.edu/abs/2004ApJ...614..527Z/abstract). Extending the mathematical framework to these [[n-point-correlation-function|N-point correlation function]]s is essential for placing robust constraints on primordial non-Gaussianity and distinguishing between complex models of the galaxy-halo connection.

## Physical Mechanisms of Galaxy Bias

The spatial distribution of luminous galaxies is not a perfect mirror of the underlying [[three-dimensional-cosmic-density-fields|Three-dimensional cosmic density fields]]. Because galaxies preferentially form in the deep potential wells of [[halo-clustering|Halo clustering]], they act as biased tracers of the cosmic mass distribution. The study of the physical mechanisms driving this bias is essential both for understanding galaxy formation and for extracting robust cosmological parameters from large-scale structure surveys.

The simplest approximation is the [[local-bias-models|Local bias models]] in the linear regime, which assumes that the galaxy overdensity $\delta_g$ is directly proportional to the matter overdensity $\delta_m$ via a constant linear bias parameter $b$:
$$ \delta_g(\mathbf{x}) = b \delta_m(\mathbf{x}) $$
This leads to a simple scaling of the power spectrum, $P_g(k) = b^2 P_m(k)$. Grounded in [[peak-theory|Peak theory]], this model naturally explains why massive halos (and the bright galaxies within them) are more strongly clustered than the underlying matter field, yielding $b > 1$.

However, gravitational collapse and baryonic physics are highly non-linear. In higher-order models, the galaxy density is expressed as a general function of the local matter density, $\delta_g = f(\delta_m)$. Expanding this function yields a Taylor series of higher-order bias parameters (e.g., $b_1, b_2$). While [[deterministic-bias-models|Deterministic bias models]] assume a strict one-to-one mapping between $\delta_m$ and $\delta_g$, the complex physics of galaxy formation inevitably introduces scatter. This is captured by [[stochastic-bias|Stochastic bias]], wherein $\delta_g$ is treated as a random variable $\delta_g = X(\delta_m)$ possessing both a mean relation and a measurable variance [Blanton et al. (2000)](https://ui.adsabs.harvard.edu/abs/2000ApJ...544...63B/abstract), [Szapudi et al. (2004)](https://ui.adsabs.harvard.edu/abs/2004ApJ...602...26S/abstract).

To physically bridge the gap between dark matter halos and galaxies, the field has largely shifted to the Halo Occupation Distribution (HOD) framework. The HOD specifies the probability that a halo of mass $M$ hosts $N$ galaxies of a given type [Zheng et al. (2005)](https://ui.adsabs.harvard.edu/abs/2007ApJ...659....1Z/abstract). This framework fundamentally separates galaxies into "centrals" (residing at the core of the halo) and "satellites" (orbiting within the halo). HOD modeling successfully explains the strong clustering dependence on luminosity and color: for instance, red, luminous galaxies exhibit steeply enhanced clustering on small scales as satellites in massive clusters [Zehavi et al. (2010)](https://ui.adsabs.harvard.edu/abs/2011ApJ...736...59Z/abstract). 

Standard HOD formulations assume that [[halo-matter-bias|Halo-matter bias]] is dictated exclusively by halo mass. However, simulations and high-precision clustering data show that the clustering of halos also depends on secondary properties, such as formation time and concentration. This phenomenon is broadly known as halo assembly bias, or [[anisotropic-galaxy-assembly-bias|Anisotropic galaxy assembly bias]]. Observational evidence indicates that brighter central galaxies reside in more concentrated halos but are systematically less clustered on large scales, a distinct signature of assembly bias [Liu et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251021377L/abstract). Despite this, measuring assembly bias remains observationally challenging due to parameter degeneracies, and standard mass-only models are sometimes still statistically favored for certain galaxy samples [Vakili et al. (2016)](https://ui.adsabs.harvard.edu/abs/2019ApJ...872..115V/abstract). Consequently, the literature notes a persistent tension where bias inferred from small-scale HOD modeling is frequently larger than that derived from large-scale power spectrum methods [More et al. (2011)](https://ui.adsabs.harvard.edu/abs/2011ApJ...741...19M/abstract).

Finally, while bias is generally assumed to be scale-independent on large, linear scales, specific physical mechanisms can break this assumption. In cosmologies with massive neutrinos, galaxy bias defined relative to the total matter field acquires a distinct scale dependence even on linear scales. Furthermore, at high redshifts ($z \gtrsim 3$), recent [[cross-correlation-analysis|Cross-correlation analysis]] reveals that the widely used assumption of separable halo bias breaks down on quasi-linear scales (1-5 Mpc), necessitating highly non-linear and non-separable bias treatments for early-universe clustering statistics [Mons et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv250607662M/abstract).

## Historical Development of Redshift Surveys

The quantitative study of galaxy clustering has been driven by the increasing scale and precision of [[cosmic-surveys|Cosmic surveys]]. Early statistical analyses were largely confined to two-dimensional angular clustering derived from photographic plates. The advent of multi-object spectroscopy revolutionized the field by adding line-of-sight distances, enabling the reconstruction of three-dimensional cosmic density fields.

The [[cfa-redshift-survey|CfA Redshift Survey]] was among the first pioneering efforts to map the local universe in three dimensions. It famously revealed that galaxies are not distributed uniformly, but rather assemble into a complex [[galaxy-structure|Galaxy structure]] of filaments, sheets, and empty voids [Huchra et al. (1988)](https://ui.adsabs.harvard.edu/abs/1988ASPC....5...41H/abstract). Analyses of the CfA catalog provided early three-dimensional estimates of the [[two-point-correlation-function|Two-point correlation function]], demonstrating a characteristic power-law behavior $\xi(r) = (r/r_0)^{-\gamma}$ with a correlation length $r_0 \approx 5 h^{-1}$ Mpc and slope $\gamma \approx 1.8$ [Martinez et al. (1990)](https://ui.adsabs.harvard.edu/abs/1990ApJ...357...50M/abstract).

In the 1990s, automated plate scanning significantly expanded the available data volume. The [[apm-galaxy-catalogue|APM galaxy catalogue]], a wide-area photometric survey, provided crucial measurements of the large-scale angular correlation function. These measurements demonstrated that the standard Cold Dark Matter (CDM) model predicted significantly less large-scale clustering than what was observed in the universe, providing early evidence that ultimately supported the shift toward a concordant $\Lambda$CDM cosmology. Concurrently, spectroscopic campaigns like the [[las-campanas-redshift-survey|Las Campanas Redshift Survey]] provided deeper structural maps, enabling early quantitative analyses of [[stochastic-bias|Stochastic bias]] and the dependence of clustering amplitude on galaxy luminosity and morphological type [Valotto et al. (1997)](https://ui.adsabs.harvard.edu/abs/1997ApJ...481..594V/abstract), [Blanton et al. (2000)](https://ui.adsabs.harvard.edu/abs/2000ApJ...544...63B/abstract).

The turn of the 21st century marked the transition to industrial-scale redshift surveys. The [[2dfgrs-galaxy-catalogue|2dFGRS galaxy catalogue]], mapping over 220,000 galaxies at a median redshift of $z \sim 0.1$, allowed for unprecedented precision in extracting cosmological parameters. By measuring [[redshift-space-distortions|Redshift-space distortions]] induced by peculiar velocities, 2dFGRS constrained the linear growth rate of structure and the density parameter. A hallmark result was the precise measurement of the distortion parameter $\beta = \Omega_m^{0.6}/b = 0.43 \pm 0.07$, where $b$ is the linear galaxy bias [Peacock et al. (2011)](https://ui.adsabs.harvard.edu/abs/2001Natur.410..169P/abstract).

Simultaneously, the Sloan Digital Sky Survey acquired redshifts for roughly $10^6$ galaxies. The sheer statistical power of this effort enabled researchers to definitively measure the multivariate dependence of clustering on intrinsic [[galaxy-properties|Galaxy properties]]. High-precision mapping established that brighter, redder galaxies exhibit significantly higher clustering amplitudes and steeper correlation functions than their fainter, bluer counterparts [Zehavi et al. (2010)](https://ui.adsabs.harvard.edu/abs/2011ApJ...736...59Z/abstract). This work was instrumental in shifting the theoretical paradigm from simple [[deterministic-bias-models|Deterministic bias models]] to comprehensive physical frameworks that explicitly connect [[galaxy-populations|Galaxy populations]] to their underlying host dark matter halos.

## Redshift-Space Distortions and Peculiar Velocities

When mapping the three-dimensional spatial distribution of galaxies, distances are typically inferred from observed redshifts. However, these redshifts are not purely cosmological; they contain a Doppler component from the galaxies' local [[peculiar-velocity-field|Peculiar velocity field]]. This line-of-sight contamination creates apparent anisotropies in the clustering signal, a phenomenon known as [[redshift-space-distortions|Redshift-space distortions]].

On small, highly non-linear scales ($r \lesssim 5 \ h^{-1}$ Mpc), the random thermal motions of galaxies within virialized dark matter halos produce an artificial elongation of structures along the line of sight. This distinctive stretching is colloquially referred to as the [[fingers-of-god|Fingers of God]] effect. Redshift surveys have measured a pairwise peculiar velocity dispersion for these objects on the order of $\sigma_{12} \approx 600 \pm 100 \ \text{km s}^{-1}$ [Zehavi et al. (2001)](https://ui.adsabs.harvard.edu/abs/2002ApJ...571..172Z/abstract). 

Conversely, on large, quasi-linear scales, the coherent infall of galaxies toward overdense regions—and their outflow from underdense voids—causes an apparent spatial compression along the line of sight, commonly known as the Kaiser effect [Kaiser et al. (1987)](https://ui.adsabs.harvard.edu/abs/1987MNRAS.227....1K/abstract). In the linear regime, the redshift-space power spectrum and the [[two-point-correlation-function|Two-point correlation function]] are amplified by a factor dependent on the distortion parameter $\beta \approx f/b$, where $b$ is the linear galaxy bias and $f$ is the growth rate of structure.

By decomposing the anisotropic correlation function into transverse and line-of-sight separations, analysts can simultaneously model the Fingers of God and the Kaiser effect. This anisotropic clustering measurement is frequently coupled with the [[alcock-paczynski-test|Alcock-Paczynski test]], an approach that uses the fundamental assumption of cosmic isotropy to constrain the background expansion history and break geometric degeneracies in the data.

RSD measurements provide a direct empirical probe of the growth rate of structure, conventionally parameterized by the observable [[f-8|fσ8]]. Because the growth rate dictates how rapidly mass accretes onto cosmic structures over time, $f\sigma_8$ is highly sensitive to the underlying gravitational physics, serving as a powerful test of General Relativity against modified gravity models. For example, analyses of the SDSS DR7 main galaxy sample have yielded $f\sigma_8 = 0.376 \pm 0.038$ at a median redshift of $z=0.1$ [Shi et al. (2017)](https://ui.adsabs.harvard.edu/abs/2018ApJ...861..137S/abstract).

## Property-Dependent Clustering and Environmental Effects

Galaxy clustering is strongly modulated by the intrinsic properties of the tracer populations. The amplitude and slope of the [[two-point-correlation-function|Two-point correlation function]] vary significantly with galaxy luminosity, color, morphology, and star formation history. 

Observations consistently reveal a positive correlation between clustering amplitude and [[galaxy-luminosity-function|Galaxy luminosity function]]. In the SDSS, the large-scale bias factor for volume-limited samples grows slowly for luminosities $L < L^*$ and increases sharply for $L > L^*$. The variation of clustering with luminosity provides stringent constraints on models linking the dark matter halo mass function to the observed luminosity distribution.

Alongside luminosity, clustering is profoundly dependent on galaxy color and morphological type, a manifestation of the well-documented [[morphology-density-relation|Morphology-density relation]] and [[galactic-bimodality|Galactic Bimodality]]. Red, early-type galaxies exhibit substantially higher clustering amplitudes and steeper correlation functions than blue, late-type galaxies [Budavári et al. (2003)](https://ui.adsabs.harvard.edu/abs/2003ApJ...595...59B/abstract). This color dependence is especially pronounced on small spatial scales, where the clustering of low-luminosity red galaxies spikes due to a high fraction of these objects residing as satellite galaxies within massive dark matter halos [Zehavi et al. (2010)](https://ui.adsabs.harvard.edu/abs/2011ApJ...736...59Z/abstract). 

Recent spectroscopic surveys have demonstrated that specific star formation rate (sSFR) is likely a more fundamental predictor of clustering strength than stellar mass. At the extreme star-forming end, gas-rich galaxies selected by their 21-cm H I emission are among the most weakly clustered populations known, often analyzed via the [[h-i-mass-function|H I mass function]]. Furthermore, these H I-selected galaxies demonstrate a distinct clustering dependence on gas mass that can be successfully modeled by preferentially placing gas-rich galaxies in late-forming halos [Guo et al. (2017)](https://ui.adsabs.harvard.edu/abs/2017ApJ...846...61G/abstract).

The interplay between environment and galaxy properties also evolves with redshift. A classic example is the [[butcher-oemler-effect|Butcher-Oemler effect]], which describes the dramatic increase in the fraction of blue, star-forming galaxies in dense cluster environments at higher redshifts ($z \sim 0.3 - 0.5$) compared to present-day clusters.

## The Galaxy-Halo Connection and Assembly Bias

The mapping of galaxies to their underlying dark matter distribution is canonically described by the Halo Occupation Distribution (HOD) framework. In the standard paradigm, the [[dark-matter-halo-properties-and-statistics|Dark Matter Halo Properties and Statistics]]—specifically mass—is the primary determinant of its galaxy content. This assumption underpins models of the [[halo-mass-luminosity-relation|Halo mass-luminosity relation]] and the stellar-to-halo mass relation, where techniques such as subhalo abundance matching are routinely used to populate simulated halos [Zehavi et al. (2010)](https://ui.adsabs.harvard.edu/abs/2011ApJ...736...59Z/abstract). For many statistical applications, this mass-only mapping successfully reproduces the broad features of the [[two-point-correlation-function|Two-point correlation function]] on large linear scales.

However, high-precision clustering measurements have exposed the limitations of the standard HOD model. Detailed fits to small-scale clustering have revealed $>4\sigma$ tensions when applying strictly mass-only models, strongly indicating the need for second-order halo properties. This phenomenon, known as assembly bias, posits that the spatial clustering of halos—and by extension, the galaxies within them—depends on variables beyond mass, such as formation history, age, and halo concentration, necessitating models of [[anisotropic-galaxy-assembly-bias|Anisotropic galaxy assembly bias]] [Vakili et al. (2016)](https://ui.adsabs.harvard.edu/abs/2019ApJ...872..115V/abstract). 

Observational evidence for galaxy assembly bias is increasingly robust, particularly when analyzing populations split by secondary parameters. For example, recent analyses of Brightest Cluster Galaxies (BCGs) demonstrate that brighter BCGs reside in more concentrated halos but exhibit weaker clustering on large scales. This anti-correlation yields a $\sim 3\sigma$ deviation from standard mass-dependent bias predictions [Liu et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251021377L/abstract).

Resolving these ambiguities requires advanced theoretical frameworks, alongside joint analyses utilizing [[high-order-galaxy-statistics|High-order galaxy statistics]] to fully untangle the physics of the galaxy-halo connection.

## Higher-Order Clustering and Non-Gaussian Statistics

While the [[two-point-correlation-function|Two-point correlation function]] and the [[cosmological-power-spectrum|Cosmological power spectrum]] have historically been the workhorses of large-scale structure cosmology, they cannot fully capture the non-linear, non-Gaussian signatures induced by gravitational evolution. To break degeneracies between galaxy bias parameters and cosmological parameters like $\sigma_8$, contemporary analyses increasingly rely on higher-order [[summary-statistics|Summary statistics]]. 

The most direct extensions are the [[three-point-correlation-function|Three-point correlation function]] in real space and its Fourier equivalent, the bispectrum. In the weakly non-linear regime, measuring the [[reduced-three-point-correlation-function|Reduced three-point correlation function]] or the [[reduced-bispectrum|Reduced bispectrum]] is highly effective because these quantities can isolate non-linear bias parameters from the overall amplitude of matter clustering [Zheng et al. (2004)](https://ui.adsabs.harvard.edu/abs/2004ApJ...614..527Z/abstract).

Because full bispectrum covariance matrices are computationally expensive to estimate, proxy statistics such as skew-spectra have gained prominence. Another major advancement is the use of [[density-split-statistics|Density-split statistics]], which divides a surveyed volume into distinct environments based on local density and measures clustering within each regime. By capturing higher-order information on small scales, density-split clustering dramatically improves constraints on primordial non-Gaussianity.

Several other novel frameworks have emerged alongside these methods. The "Beyond-2pt" community data challenge recently benchmarked and validated the unbiased parameter recovery of statistics such as [[knn-summary-statistics|kNN summary statistics]] (nearest-neighbor distributions) and void statistics [ThBeyond-2pt Collaboration et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025ApJ...990...99B/abstract). Furthermore, topological measures of the cosmic web, such as percolation analysis, offer unique sensitivity to higher-order correlations and structural connectivity far beyond traditional two-point statistics.

## Observational Systematics and Statistical Biases

Accurately recovering the true three-dimensional spatial distribution of galaxies from observables requires modeling and mitigating a wide array of systematic effects and statistical biases.

**Selection Functions and Malmquist Bias**
In any flux-limited galaxy survey, the observed number density of galaxies decreases with distance because intrinsically faint galaxies fall below the apparent flux threshold. This effect is mathematically described by the [[selection-function|Selection function]]. Because intrinsically brighter galaxies are over-represented at larger distances, clustering measurements are highly susceptible to [[sample-selection-biases|Sample selection biases]]. Since clustering amplitude depends strongly on luminosity, failing to account for these effects yields an artificial redshift-dependent increase in the clustering signal. To correct for these flux-limit effects, techniques such as the smoothed density-corrected $V_{\max}$ method have been shown to provide much more accurate random samples for the [[peebles-estimator|Peebles estimator]].

**Integral Constraints**
Clustering estimators define overdensities relative to the mean number density of the survey. This self-calibration forces the integral of the correlation function over the survey volume to identically vanish, artificially suppressing power on large scales. In modern spectroscopic surveys, deriving the radial selection function from the observed redshift distribution introduces [[radial-integral-constraints|Radial integral constraints]], which can significantly distort the shape of the large-scale clustering signal if not rigorously modeled.

**Magnification and Size Bias**
Measurements are further distorted by foreground mass distributions acting as gravitational lenses. Lensing magnification increases the observed flux of [[background-galaxies|Background galaxies]], potentially lifting them above the survey's detection threshold. Together, these effects couple the background galaxy density to the foreground matter density; if unaccounted for, this lensing bias introduces a spurious correlation that can shift cosmological parameter estimates by several standard deviations.

**Cosmic Variance**
For surveys spanning finite volumes, the measured clustering represents only a single realization of the underlying density field. The resulting field-to-field statistical scatter is known as [[sample-variance|Sample variance]]. This uncertainty dominates clustering measurements of rare, highly biased objects at high redshift, such as the $z > 8$ luminous galaxies discovered by JWST [Jespersen et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025ApJ...982...23J/abstract).

**Photometric and Observational Systematics**
In deep photometric surveys, observational artifacts such as source blending, stellar [[contamination-astronomy|Contamination (astronomy)]], and seeing variations imprint non-cosmological fluctuations onto the galaxy density field. On the largest physical scales, unaccounted photometric zero-point drifts can simulate excess clustering power, a recognized issue in interpreting large-scale clustering anomalies.

## Clustering Evolution across Cosmic Time

The study of the [[redshift-evolution-and-distribution|Redshift evolution and distribution]] of galaxies is governed by two competing physical effects: the gravitational growth of structure and the time evolution of galaxy bias. At high redshifts, observable galaxies represent rare peaks in the density field and reside in the most massive dark matter halos available at that epoch, resulting in a very high clustering bias. As the universe expands via [[hierarchical-clustering|Hierarchical clustering]], these once-extreme density fluctuations become more common, causing the galaxy bias to steadily decrease toward unity.

Observational studies confirm this theoretical picture. For example, measurements of the [[two-point-correlation-function|Two-point correlation function]] in early redshift surveys demonstrate that while the clustering power-law slope remains similar to local values, the intrinsic correlation amplitude is lower at higher redshifts. However, the most luminous galaxies at these epochs are shown to trace much higher density peaks than their local counterparts, offering direct empirical evidence for an evolving bias [Pollo et al. (2006)](https://ui.adsabs.harvard.edu/abs/2007ASPC..380..533P/abstract).

Probing deeper requires targeting Lyman-break galaxies and Lyman-alpha emitters. Recent analyses have utilized the high-redshift UV galaxy luminosity function to constrain the clustering of dark matter on highly non-linear scales over the redshift range $4 \leq z \leq 10$, capturing information far beyond what is accessible through the low-redshift [[cosmological-power-spectrum|Cosmological power spectrum]] [Sabti et al. (2021)](https://ui.adsabs.harvard.edu/abs/2022ApJ...928L..20S/abstract). A defining challenge in measuring these early epochs remains [[sample-variance|Sample variance]], as the super-Poissonian field-to-field variation in galaxy counts heavily impacts small-area deep surveys.

## Open Questions and Future Frontiers

As precision in [[cosmic-surveys|Cosmic surveys]] increases, galaxy clustering has become a premier laboratory for probing fundamental physics. A major frontier is understanding the impact of massive neutrinos. Theoretical modeling demonstrates that in such cosmologies, galaxy bias becomes explicitly scale-dependent even in the linear regime, requiring careful calibration against the [[cosmological-power-spectrum|Cosmological power spectrum]].

Clustering statistics are also increasingly used to constrain models of cosmic inflation via Primordial non-Gaussianity. To break the degeneracies between inflation parameters and galaxy bias, researchers are turning to [[higher-order-clustering-statistics|Higher-Order Clustering Statistics]], such as the [[reduced-bispectrum|Reduced bispectrum]], and environmental measures like [[density-split-statistics|Density-split statistics]].

[[redshift-space-distortions|Redshift-space distortions]] remain a primary tool for measuring the growth rate of structure. While current constraints show no evidence of deviations from General Relativity, yielding a growth rate of [[f-8|fσ8]] $\approx 0.44 \pm 0.05$, isolating the effects of modified gravity is complicated. Modern multi-probe techniques like [[3x2pt-analysis|3x2pt analysis]]—which jointly model clustering, [[cosmic-shear|Cosmic shear]], and [[galaxy-matter-cross-correlation|Galaxy-matter cross-correlation]]—are essential for breaking these degeneracies.

On small scales, a persistent frontier is refining the physical accuracy of the galaxy-halo connection. Standard HOD models are showing signs of strain, suggesting that [[halo-clustering|Halo clustering]] assembly bias is more significant than previously assumed [Szewciw et al. (2021)](https://ui.adsabs.harvard.edu/abs/2022ApJ...926...15S/abstract). Future interpretative efforts will also require modeling baryonic processes and non-linear effects using tools like [[halofit|Halofit]] and [[peak-counts|Peak counts]].

Finally, the discovery of extreme high-redshift galaxies by JWST has spurred debate over whether these objects represent a genuine tension with the standard model or an underestimation of [[sample-variance|Sample variance]]. Resolving these questions remains at the forefront of modern galaxy clustering and cosmology.

---

## References

- Bagla et al. (1997). *Evolution of Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1998lsst.conf..253B/abstract)
- Baugh et al. (2013). *Luminosity Bias: From Haloes to Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PASA...30...30B/abstract)
- Beisbart et al. (2000). *Luminosity- and Morphology-dependent Clustering of Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...545....6B/abstract)
- Benoist et al. (1996). *Biasing in the Galaxy Distribution*. [ADS](https://ui.adsabs.harvard.edu/abs/1996ApJ...472..452B/abstract)
- Berlind et al. (2007). *Large-Angular-Scale Clustering as a Clue to the Source of UHECRs*. [ADS](https://ui.adsabs.harvard.edu/abs/2008ICRC....2..157B/abstract)
- Berti et al. (2021). *Main-sequence Scatter is Real: The Joint Dependence of Galaxy Clustering on Star Formation and Stellar Mass*. [ADS](https://ui.adsabs.harvard.edu/abs/2021AJ....161...49B/abstract)
- Beyond-2pt Collaboration et al. (2024). *A Parameter-Masked Mock Data Challenge for Beyond-Two-Point Galaxy Clustering Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240502252B/abstract)
- Blanton et al. (2000). *How Stochastic Is the Relative Bias between Galaxy Types?*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...544...63B/abstract)
- Bonometto et al. (1987). *Optical Bias and Hierarchical Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1987ApJ...323...19B/abstract)
- Bray et al. (2015). *PRIMUS: The Effect of Physical Scale on the Luminosity Dependence of Galaxy Clustering via Cross-correlations*. [ADS](https://ui.adsabs.harvard.edu/abs/2015ApJ...811...90B/abstract)
- Bromley et al. (1997). *Estimating Ω from Galaxy Redshifts: Linear Flow Distortions and Nonlinear Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1997ApJ...475..414B/abstract)
- Brunner et al. (1999). *Evolution in the Clustering of Galaxies for Z&lt;1.0*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...541..527B/abstract)
- Brunner et al. (2000). *Evolution in the Clustering of Galaxies for z &lt; 1.0*. [ADS](https://ui.adsabs.harvard.edu/abs/2000astro.ph..5312B/abstract)
- Budavári et al. (2003). *Angular Clustering with Photometric Redshifts in the Sloan Digital Sky Survey: Bimodality in the Clustering Properties of Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2003ApJ...595...59B/abstract)
- Byun et al. (2014). *Non-Gaussian shape discrimination with spectroscopic galaxy surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2015JCAP...03..019B/abstract)
- Böhringer et al. (2001). *Harvesting the results from the REFLEX cluster survey: following-up on an ESO Key programme*. [ADS](https://ui.adsabs.harvard.edu/abs/2001Msngr.106...24B/abstract)
- Cabré et al. (2008). *Clustering of luminous red galaxies - I. Large-scale redshift-space distortions*. [ADS](https://ui.adsabs.harvard.edu/abs/2009MNRAS.393.1183C/abstract)
- Calore et al. (2021). *Dissecting the Inner Galaxy with γ -Ray Pixel Count Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2021PhRvL.127p1102C/abstract)
- Caminha et al. (2013). *Magnification Bias in Gravitational Arc Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2013arXiv1308.6569C/abstract)
- Carlberg et al. (1999). *Galaxy Clustering Evolution in the CNOC2 High-Luminosity Sample*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...542...57C/abstract)
- Castello et al. (2022). *Rescuing constraints on modified gravity using gravitational redshift in large-scale structure*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PhRvD.106h3511C/abstract)
- Catelan et al. (1994). *Weighted Bias and Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1994MNRAS.268..966C/abstract)
- Coil et al. (2013). *The Large-Scale Structure of the Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2013pss6.book..387C/abstract)
- Coil et al. (2016). *PRIMUS+DEEP2: The Dependence of Galaxy Clustering on Stellar Mass and Specific Star Formation Rate at 0.2 &lt; z &lt; 1.2*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ApJ...838...87C/abstract)
- Cole et al. (1999). *The Evolution of Galaxy Clustering in Hierachical Models*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ASPC..200..109C/abstract)
- Coles et al. (1992). *Analysis of patterns in galaxy clustering.*. [ADS](https://ui.adsabs.harvard.edu/abs/1992scma.conf...57C/abstract)
- Coles et al. (1999). *Bias and Hierarchical Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1999ApJ...521L...5C/abstract)
- Coles et al. (2001). *Large-scale Structure, Theory and Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2001pteu.conf..217C/abstract)
- Cooray et al. (2003). *Non-linear galaxy power spectrum and cosmological parameters*. [ADS](https://ui.adsabs.harvard.edu/abs/2004MNRAS.348..250C/abstract)
- Couch et al. (2003). *Clustering Studies with the 2dF Galaxy Redshift Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2004cgpc.symp...42C/abstract)
- Covone et al. (2014). *Measurement of the Halo Bias from Stacked Shear Profiles of Galaxy Clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2014ApJ...784L..25C/abstract)
- Crone Odekon et al. (2008). *Characteristic Scales in Stellar Clustering: A Transition Near the Disk Scale Height*. [ADS](https://ui.adsabs.harvard.edu/abs/2008arXiv0804.4607C/abstract)
- Dai et al. (2020). *What can we learn by combining the skew spectrum and the power spectrum?*. [ADS](https://ui.adsabs.harvard.edu/abs/2020JCAP...08..007D/abstract)
- Davé et al. (1999). *Evolution of Clustering and Bias in a ΛCDM Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ASPC..200..402D/abstract)
- de Grijs et al. (2014). *Clustering of Local Group Distances: Publication Bias or Correlated Measurements? I. The Large Magellanic Cloud*. [ADS](https://ui.adsabs.harvard.edu/abs/2014AJ....147..122D/abstract)
- de Grijs et al. (2014). *Clustering of Local Group Distances: Publication Bias or Correlated Measurements? II. M31 and Beyond*. [ADS](https://ui.adsabs.harvard.edu/abs/2014AJ....148...17D/abstract)
- de Grijs et al. (2015). *Clustering of Local Group Distances: Publication Bias or Correlated Measurements? III. The Small Magellanic Cloud*. [ADS](https://ui.adsabs.harvard.edu/abs/2015AJ....149..179D/abstract)
- de Mattia et al. (2019). *Integral constraints in spectroscopic surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2019JCAP...08..036D/abstract)
- Deng et al. (2019). *Dependence of Clustering on Galaxy Color for the Volume-limited Main Galaxy Sample of the SDSS6*. [ADS](https://ui.adsabs.harvard.edu/abs/2009PASP..121..231D/abstract)
- Desjacques et al. (2018). *Large-scale galaxy bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2018PhR...733....1D/abstract)
- Desjacques et al. (2021). *Statistics of a single sky: constrained random fields and the imprint of Bardeen potentials on galaxy clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504.5612D/abstract)
- Efstathiou et al. (1983). *The Formation of Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/1983FCPh....9....1E/abstract)
- Efstathiou et al. (1991). *Large-scale structure in the Universe.*. [ADS](https://ui.adsabs.harvard.edu/abs/1991PhST...36...88E/abstract)
- Efstathiou et al. (1993). *Galaxy Clustering on Large Scales*. [ADS](https://ui.adsabs.harvard.edu/abs/1993PNAS...90.4859E/abstract)
- Eisenstein et al. (2004). *The Small-Scale Clustering of Luminous Red Galaxies via Cross-Correlation Techniques*. [ADS](https://ui.adsabs.harvard.edu/abs/2005ApJ...619..178E/abstract)
- Franco et al. (2025). *Probing Large-scale Structures with the Two-point Function and the Power Spectrum: Insights into Cosmic Clustering Evolution*. [ADS](https://ui.adsabs.harvard.edu/abs/2025ApJ...993..133F/abstract)
- Fry et al. (1996). *The Evolution of Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/1996ApJ...461L..65F/abstract)
- Gaztanaga et al. (1994). *Bias and High-Order Galaxy Correlation Functions in the APM Galaxy Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/1994ApJ...437L..13G/abstract)
- Geller et al. (2011). *The Unexplored Redshift Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2001PASP..113..405G/abstract)
- Giuricin et al. (2000). *Clustering of Galaxies and Groups in the NOG Sample*. [ADS](https://ui.adsabs.harvard.edu/abs/2000cucg.confE..56G/abstract)
- Gonzalez et al. (2001). *Clustering in the Las Campanas Distant Cluster Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2001astro.ph.10337G/abstract)
- Gould et al. (1993). *Selection, Covariance, and Malmquist Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/1993ApJ...412L..55G/abstract)
- Guo et al. (2017). *Constraining the H I-Halo Mass Relation from Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ApJ...846...61G/abstract)
- Guzzo et al. (1991). *Scale-invariant Clustering in the Large-Scale Distribution of Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/1991ApJ...382L...5G/abstract)
- Guzzo et al. (2001). *Clustering in the universe: from highly nonlinear structures to homogeneity*. [ADS](https://ui.adsabs.harvard.edu/abs/2002moco.conf..344G/abstract)
- Guzzo et al. (2002). *Recent Advances in Large-Scale Structure and Galaxy Formation Studies*. [ADS](https://ui.adsabs.harvard.edu/abs/2002NuPhS.110..115G/abstract)
- Hearin et al. (2017). *Clustering constraints on the relative sizes of central and satellite galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.1805H/abstract)
- Hill et al. (2024). *The Impact of Galaxy-halo Size Relations on Galaxy Clustering Signals*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241113484H/abstract)
- Huchra et al. (1988). *Redshift surveys and the description of clustering in the universe.*. [ADS](https://ui.adsabs.harvard.edu/abs/1988ASPC....5...41H/abstract)
- Hudon et al. (1996). *The Clustering of Faint Galaxies and the Evolution of XI (r)*. [ADS](https://ui.adsabs.harvard.edu/abs/1996ApJ...469..519H/abstract)
- Izbicki et al. (2016). *Photo-z Estimation: An Example of Nonparametric Conditional Density Estimation under Selection Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2016arXiv160401339I/abstract)
- Jespersen et al. (2025). *On the Significance of Rare Objects at High Redshift: The Impact of Cosmic Variance*. [ADS](https://ui.adsabs.harvard.edu/abs/2025ApJ...982...23J/abstract)
- Joy et al. (2025). *Environmental dependences of galaxy properties in the southern regions of the GAMA survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250510429J/abstract)
- Jullo et al. (2012). *COSMOS: Stochastic Bias from Measurements of Weak Lensing and Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2012ApJ...750...37J/abstract)
- Kaiser et al. (1987). *Clustering in real space and in redshift space*. [ADS](https://ui.adsabs.harvard.edu/abs/1987MNRAS.227....1K/abstract)
- Kragh Jespersen et al. (2024). *On the Significance of Rare Objects at High Redshift: The Impact of Cosmic Variance*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240300050K/abstract)
- Krywonos et al. (2024). *Improving Photometric Galaxy Clustering Constraints With Cross-Bin Correlations*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240408039K/abstract)
- Lahav et al. (1998). *Joint cosmological inference from galaxy surveys, the cosmic microwave background and the X-ray background*. [ADS](https://ui.adsabs.harvard.edu/abs/1999elss.conf..190L/abstract)
- Lahav et al. (2002). *The 2dF Galaxy Redshift Survey: Cosmological Parameters and Galaxy Biasing*. [ADS](https://ui.adsabs.harvard.edu/abs/2002ntto.conf..145L/abstract)
- Landy et al. (1992). *A General Analytical Solution to the Problem of Malmquist Bias Due to Lognormal Distance Errors*. [ADS](https://ui.adsabs.harvard.edu/abs/1992ApJ...391..494L/abstract)
- Landy et al. (1996). *Strong Angular Clustering of Very Blue Galaxies: Evidence of a Low-Redshift Population*. [ADS](https://ui.adsabs.harvard.edu/abs/1996ApJ...460...94L/abstract)
- Le Fevre et al. (1995). *The Canada-France Redshift Survey. VIII. Evolution of the Clustering of Galaxies from Z approximately 1*. [ADS](https://ui.adsabs.harvard.edu/abs/1996ApJ...461..534L/abstract)
- Levine et al. (2024). *Galaxy Clustering with LSST: Effects of Number Count Bias from Blending*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241114564L/abstract)
- Levine et al. (2025). *Galaxy Clustering with LSST: Effects of Number Count Bias from Blending*. [ADS](https://ui.adsabs.harvard.edu/abs/2025OJAp....8E..38L/abstract)
- Lindholm et al. (2020). *Clustering of CODEX clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2021A&A...646A...8L/abstract)
- Liu et al. (2025). *Luminosity-Dependent Assembly Bias of Central Galaxies from Weak Lensing and Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251021377L/abstract)
- Loveday et al. (1995). *The Stromlo-APM Redshift Survey. II. Variation of Galaxy Clustering with Morphology and Luminosity*. [ADS](https://ui.adsabs.harvard.edu/abs/1995ApJ...442..457L/abstract)
- Ma et al. (2009). *Clustering of K-band selected local galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2009RAA.....9..979M/abstract)
- Ma et al. (2024). *Density-based clustering algorithm for galaxy group/cluster identification*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240509855M/abstract)
- Ma et al. (2025). *sOPTICS: a modified density-based algorithm for identifying galaxy groups/clusters and brightest cluster galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2025MNRAS.537.1504M/abstract)
- Mana et al. (2013). *Combining clustering and abundances of galaxy clusters to test cosmology and primordial non-Gaussianity*. [ADS](https://ui.adsabs.harvard.edu/abs/2013MNRAS.434..684M/abstract)
- Marinoni et al. (2006). *Evolution of the Non-Linear Galaxy Bias up to Redshift z=1.5*. [ADS](https://ui.adsabs.harvard.edu/abs/2006astro.ph.12123M/abstract)
- Martinez et al. (1990). *Clustering Paradigms and Multifractal Measures*. [ADS](https://ui.adsabs.harvard.edu/abs/1990ApJ...357...50M/abstract)
- Martinez et al. (1996). *Measures of Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1996dmu..conf..255M/abstract)
- Martinez et al. (2002). *Clustering statistics in cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2002SPIE.4847...86M/abstract)
- Martínez et al. (2002). *Statistics of galaxy clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2003sca..book..143M/abstract)
- Martínez et al. (2002). *Statistics of the Galaxy Distribution*. [ADS](https://ui.adsabs.harvard.edu/abs/2002sgd..book.....M/abstract)
- Marulli et al. (2020). *C<SUP>3</SUP> Cluster Clustering Cosmology I. New Constraints on the Cosmic Growth Rate at z   0.3 from Redshift-space Clustering Anisotropies*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...920...13M/abstract)
- Maurogordato et al. (1991). *Scaling Invariance in the Galaxy Distribution. II. Spatial and Luminosity Effects*. [ADS](https://ui.adsabs.harvard.edu/abs/1991ApJ...369...30M/abstract)
- McGill et al. (1991). *Clustering due to cluster galaxies.*. [ADS](https://ui.adsabs.harvard.edu/abs/1991MNRAS.250..340M/abstract)
- Medezinski et al. (2017). *Testing the Large-scale Environments of Cool-core and Non-cool-core Clusters with Clustering Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ApJ...836...54M/abstract)
- Melchiorri et al. (2002). *Dark Energy: Is it Q or Lambda ?*. [ADS](https://ui.adsabs.harvard.edu/abs/2002astro.ph.12566M/abstract)
- Meyer et al. (2006). *The Weak Clustering of Gas-rich Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2007ApJ...654..702M/abstract)
- Miralles et al. (1998). *High-Redshift Clustering in the HDF*. [ADS](https://ui.adsabs.harvard.edu/abs/1998astro.ph..1062M/abstract)
- Mo et al. (1997). *Analytic Approximations to Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/1998ASSL..231..343M/abstract)
- Mons et al. (2025). *Non-Separable Halo Bias from High-Redshift Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250607662M/abstract)
- Moore et al. (1994). *The Clustering of IRAS Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/1994MNRAS.269..742M/abstract)
- Morawetz et al. (2024). *Constraining Primordial Non-Gaussianity with Density-Split Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240913583M/abstract)
- Morawetz et al. (2025). *Constraining primordial non-Gaussianity with Density-Split Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2025JCAP...01..026M/abstract)
- More et al. (2011). *How Accurate is Our Knowledge of the Galaxy Bias?*. [ADS](https://ui.adsabs.harvard.edu/abs/2011ApJ...741...19M/abstract)
- More et al. (2012). *Magnitude Gap Statistics and the Conditional Luminosity Function*. [ADS](https://ui.adsabs.harvard.edu/abs/2012ApJ...761..127M/abstract)
- Nishimichi et al. (2019). *Dark Quest. I. Fast and Accurate Emulation of Halo Clustering Statistics and Its Application to Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2019ApJ...884...29N/abstract)
- Norberg et al. (2011). *Statistical analysis of galaxy surveys - IV. An objective way to quantify the impact of superstructures on galaxy clustering statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2011MNRAS.418.2435N/abstract)
- Odekon et al. (2018). *Characteristic Scales in Stellar Clustering: A Transition Near the Disk Scale Height*. [ADS](https://ui.adsabs.harvard.edu/abs/2008ApJ...681.1248O/abstract)
- Osato et al. (2015). *Impact of Baryonic Processes on Weak-lensing Cosmology: Power Spectrum, Nonlocal Statistics, and Parameter Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2015ApJ...806..186O/abstract)
- Owens et al. (2021). *Understanding Systematic Errors in the Cepheid Distance Scale*. [ADS](https://ui.adsabs.harvard.edu/abs/2021hst..prop16627O/abstract)
- Peacock et al. (2000). *Clustering of Mass and Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2001ASIC..565..305P/abstract)
- Peacock et al. (2001). *Measuring Large-Scale Structure with the 2dF Galaxy Redshift Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2001defi.conf..221P/abstract)
- Peacock et al. (2011). *A measurement of the cosmological mass density from clustering in the 2dF Galaxy Redshift Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2001Natur.410..169P/abstract)
- Peebles et al. (1980). *Statistics of the distribution of galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/1980NYASA.336..161P/abstract)
- Percival et al. (2006). *Cosmological Constraints from Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2007LNP...720..157P/abstract)
- Pollo et al. (2006). *The VIRMOS-VLT Deep Survey: the Last 10 Billion Years of Evolution of Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2007ASPC..380..533P/abstract)
- Regos et al. (2024). *Percolation Statistics in the MillenniumTNG Simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240702574R/abstract)
- Regős et al. (2024). *Percolation Statistics in the MillenniumTNG Simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..126R/abstract)
- Repp et al. (2019). *Empirical Validation of the Ising Galaxy Bias Model*. [ADS](https://ui.adsabs.harvard.edu/abs/2019arXiv191205557R/abstract)
- Robertson et al. (2010). *A Method for Measuring the Bias of High-redshift Galaxies from Cosmic Variance*. [ADS](https://ui.adsabs.harvard.edu/abs/2010ApJ...716L.229R/abstract)
- Ross et al. (2007). *Higher Order Angular Galaxy Correlations in the SDSS: Redshift and Color Dependence of Nonlinear Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2007ApJ...665...67R/abstract)
- Ruggeri et al. (2025). *Clustering redshift distribution calibration of weak lensing surveys using the DESI-DR1 spectroscopic dataset*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251215963R/abstract)
- Ruiz-Macias et al. (2020). *Preliminary Target Selection for the DESI Bright Galaxy Survey (BGS)*. [ADS](https://ui.adsabs.harvard.edu/abs/2020RNAAS...4..187R/abstract)
- Sabti et al. (2021). *New Roads to the Small-scale Universe: Measurements of the Clustering of Matter with the High-redshift UV Galaxy Luminosity Function*. [ADS](https://ui.adsabs.harvard.edu/abs/2022ApJ...928L..20S/abstract)
- Sadat Hosseini et al. (2025). *Modeling Gravitational Wave Bias from 3D Power Spectra of Spectroscopic Surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250611201S/abstract)
- Safi et al. (2021). *Sensitivity of Cosmological Parameter Estimation to Nonlinear Prescription from Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...914...65S/abstract)
- Saslaw et al. (1980). *Galaxy clustering and thermodynamics*. [ADS](https://ui.adsabs.harvard.edu/abs/1980ApJ...235..299S/abstract)
- Scherrer et al. (1998). *Constraints on the Effects of Locally Biased Galaxy Formation*. [ADS](https://ui.adsabs.harvard.edu/abs/1998ApJ...504..607S/abstract)
- Schmidt et al. (2009). *Size Bias in Galaxy Surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2009PhRvL.103e1301S/abstract)
- Schmidt et al. (2009). *Lensing Bias in Cosmic Shear*. [ADS](https://ui.adsabs.harvard.edu/abs/2009ApJ...702..593S/abstract)
- Schmittfull et al. (2020). *Galaxy skew-spectra in redshift-space*. [ADS](https://ui.adsabs.harvard.edu/abs/2021JCAP...03..020S/abstract)
- Scranton et al. (2001). *Analysis of Systematic Effects and Statistical Uncertainties in Angular Clustering of Galaxies from Early Sloan Digital Sky Survey Data*. [ADS](https://ui.adsabs.harvard.edu/abs/2002ApJ...579...48S/abstract)
- Sheth et al. (2005). *Marked correlations in galaxy formation models*. [ADS](https://ui.adsabs.harvard.edu/abs/2005astro.ph.11773S/abstract)
- Shi et al. (2017). *Mapping the Real Space Distributions of Galaxies in SDSS DR7. II. Measuring the Growth Rate, Clustering Amplitude of Matter, and Biases of Galaxies at Redshift 0.1*. [ADS](https://ui.adsabs.harvard.edu/abs/2018ApJ...861..137S/abstract)
- Shiferaw et al. (2025). *How Do Uncertainties in Galaxy Formation Physics Impact Field-level Galaxy Bias?*. [ADS](https://ui.adsabs.harvard.edu/abs/2025ApJ...989..218S/abstract)
- Shimizu et al. (2006). *Systematic Bias in an Estimate of the Cluster Mass and the Fluctuation Amplitude from Cluster Abundance Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2006PASJ...58..291S/abstract)
- Shiveshwarkar et al. (2025). *Where does non-Universality in Assembly Bias come from?*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250811798S/abstract)
- Skibba et al. (2013). *PRIMUS: Galaxy Clustering as a Function of Luminosity and Color at 0.2 &lt; z &lt; 1*. [ADS](https://ui.adsabs.harvard.edu/abs/2014ApJ...784..128S/abstract)
- Steidel et al. (1998). *Observations of Galaxy Clustering at High Redshift*. [ADS](https://ui.adsabs.harvard.edu/abs/1998astro.ph.11400S/abstract)
- Steidel et al. (1999). *Galaxy clustering at z ~ 3*. [ADS](https://ui.adsabs.harvard.edu/abs/1999RSPTA.357..153S/abstract)
- Storey-Fisher et al. (2020). *Two-point Statistics without Bins: A Continuous-function Generalization of the Correlation Function Estimator for Large-scale Structure*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...909..220S/abstract)
- Stücker et al. (2024). *Gaussian Lagrangian Galaxy Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240501951S/abstract)
- Sugiyama et al. (2025). *Unified Lagrangian Framework for Galaxy Clustering: Consistent Modeling of Bias, Redshift-Space Distortions, and Reconstruction*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250817331S/abstract)
- Sullivan et al. (2025). *Local Primordial non-Gaussian Bias from Time Evolution*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250321736S/abstract)
- Sylos Labini et al. (2006). *Statistical Physics for Cosmic Structures*. [ADS](https://ui.adsabs.harvard.edu/abs/2006AIPC..822..294S/abstract)
- Szapudi et al. (2003). *On Recovering the Nonlinear Bias Function from Counts-in-Cells Measurements*. [ADS](https://ui.adsabs.harvard.edu/abs/2004ApJ...602...26S/abstract)
- Szewciw et al. (2021). *Toward Accurate Modeling of Galaxy Clustering on Small Scales: Constraining the Galaxy-halo Connection with Optimal Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2022ApJ...926...15S/abstract)
- Takeuchi et al. (2003). *A General Formulation of the Source Confusion Statistics and Application to Infrared Galaxy Surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2004ApJ...604...40T/abstract)
- Taruya et al. (2000). *Isodensity Statistics on Clustering of High-z Objects in Cosmological Redshift Spaces*. [ADS](https://ui.adsabs.harvard.edu/abs/2001ApJ...550..528T/abstract)
- Tegmark et al. (1998). *The Time Evolution of Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/1998ApJ...500L..79T/abstract)
- ThBeyond-2pt Collaboration et al. (2025). *A Parameter-masked Mock Data Challenge for Beyond-two-point Galaxy Clustering Statistics*. [ADS](https://ui.adsabs.harvard.edu/abs/2025ApJ...990...99B/abstract)
- Thomas et al. (2010). *Excess Clustering on Large Scales in the MegaZ DR7 Photometric Redshift Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2011PhRvL.106x1301T/abstract)
- Tiwari et al. (2024). *Impact of Large-Scale Anisotropies on Galaxy Clustering and Cosmological Constraints*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241109163T/abstract)
- Vagnozzi et al. (2018). *Bias due to neutrinos must not uncorrect'd go*. [ADS](https://ui.adsabs.harvard.edu/abs/2018JCAP...09..001V/abstract)
- Vakili et al. (2016). *How Are Galaxies Assigned to Halos? Searching for Assembly Bias in the SDSS Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2019ApJ...872..115V/abstract)
- Valotto et al. (1997). *The Dependence of Galaxy Clustering on Luminosity*. [ADS](https://ui.adsabs.harvard.edu/abs/1997ApJ...481..594V/abstract)
- van den Busch et al. (2020). *Testing KiDS cross-correlation redshifts with simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2020A&A...642A.200V/abstract)
- Wake et al. (2010). *Galaxy Clustering in the NEWFIRM Medium Band Survey: The Relationship Between Stellar Mass and Dark Matter Halo Mass at 1 &lt; z &lt; 2*. [ADS](https://ui.adsabs.harvard.edu/abs/2011ApJ...728...46W/abstract)
- Wang et al. (2019). *Accurate Modeling of the Projected Galaxy Clustering in Photometric Surveys. I. Tests with Mock Catalogs*. [ADS](https://ui.adsabs.harvard.edu/abs/2019ApJ...879...71W/abstract)
- Weaverdyck et al. (2026). *Dark Energy Survey Year 6 Results: MagLim++ Lens Sample Selection and Measurements of Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260114484W/abstract)
- White et al. (1988). *Clustering Bias in the Nearby Galaxies Catalog and in Cold Dark Matter Models*. [ADS](https://ui.adsabs.harvard.edu/abs/1988ApJ...333L..45W/abstract)
- Wyithe et al. (2002). *Cosmological Microlensing Statistics: Variability Rates for Quasars and Gamma-Ray Burst Afterglows and Implications for Macrolensing Magnification Bias and Flux Ratios*. [ADS](https://ui.adsabs.harvard.edu/abs/2002ApJ...575..650W/abstract)
- Xavier et al. (2019). *Largest scales from the largest galaxy surveys: the pseudo Karhunen-Loève method*. [ADS](https://ui.adsabs.harvard.edu/abs/2019JCAP...04..037X/abstract)
- Yang et al. (2019). *Toward accurate measurement of property-dependent galaxy clustering: I. Comparison of the V<SUB>max</SUB> method and the "shuffled" method*. [ADS](https://ui.adsabs.harvard.edu/abs/2020RAA....20...54Y/abstract)
- Yang et al. (2023). *Toward Accurate Measurement of Property-dependent Galaxy Clustering. II. Tests of the Smoothed Density-corrected V <SUB>max</SUB> Method*. [ADS](https://ui.adsabs.harvard.edu/abs/2023ApJ...945...44Y/abstract)
- Zehavi et al. (2001). *Galaxy Clustering in Early Sloan Digital Sky Survey Redshift Data*. [ADS](https://ui.adsabs.harvard.edu/abs/2002ApJ...571..172Z/abstract)
- Zehavi et al. (2010). *Galaxy Clustering in the Completed SDSS Redshift Survey: The Dependence on Color and Luminosity*. [ADS](https://ui.adsabs.harvard.edu/abs/2011ApJ...736...59Z/abstract)
- Zheng et al. (2004). *Projected Three-Point Correlation Functions and Galaxy Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2004ApJ...614..527Z/abstract)
- Zheng et al. (2005). *Breaking the Degeneracies between Cosmology and Galaxy Bias*. [ADS](https://ui.adsabs.harvard.edu/abs/2007ApJ...659....1Z/abstract)
- Zhou et al. (2025). *CSST Cosmological Emulator III: Hybrid Lagrangian Bias Expansion Emulation of Galaxy Clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250604671Z/abstract)

<!-- Generated by Lodestone | iterations: 2 | converged: True | coverage: 0.82 | date: 2026-03-06T20:06:23Z -->
