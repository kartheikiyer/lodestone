---
title: "Chern-Simons gravity"
description: "Chern-Simons gravity is a modification of general relativity that introduces a parity-violating interaction term through the coupling of a scalar field to the Pontryagin invariant. In astrophysics and cosmology, it is primarily used to investigate deviations from the Kerr metric in rotating black holes and to model parity-violating signatures in gravitational waves and the cosmic microwave background."
tags:
  - "Rotating black holes"
  - "Cosmic microwave background radiation"
  - "Kerr metric"
  - "Gravitational waves"
  - "Gravitation"
  - "Supermassive black holes"
date: "2026-03-04"
draft: false
---

Here is the revised draft of the wiki page, followed by a change log detailing the edits made.

***


**Chern-Simons gravity** is a well-motivated extension of [[general-relativity|General Relativity]] that introduces explicit parity violation to the gravitational sector. Originating from anomaly cancellations in string theory and loop quantum gravity, the theory augments the classical Einstein-Hilbert action with a parity-odd interaction term [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). This modification is characterized by the non-minimal coupling of a dynamical pseudo-scalar field (often an axion or inflaton) to the Pontryagin invariant—a topological quantity constructed from the contraction of the Riemann curvature tensor and its dual. Unlike standard [[general-relativity|General Relativity]], which assumes spacetime is symmetric under spatial inversion, Chern-Simons gravity yields field equations that fundamentally break this parity symmetry, placing it among the most widely studied chiral [[scalar-tensor-theories|Scalar-tensor theories]] [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract), [Moretti et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241011801M/abstract).

In the radiative and strong-field regimes, this mathematical framework produces highly distinct phenomenological signatures. A hallmark prediction of the theory is the *amplitude birefringence* of [[gravitational-waves|Gravitational Waves]]. While left- and right-circularly polarized tensor modes propagate at the exact same speed, they experience different amplitude evolutions as they travel across cosmological distances [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). Furthermore, the theory dictates that non-vanishing spacetime curvature sources the pseudo-scalar field around rotating compact objects. Spherically symmetric vacuum solutions like the [[schwarzschild-metric|Schwarzschild metric]] remain unaffected, but rotating black holes acquire a scalar dipole charge, or "hair," explicitly contradicting the classical no-hair theorem of the Kerr metric. This scalar coupling leads to modified geodetic precession and asymmetric photon capture rates, resulting in parity-violating distortions in black hole shadows.

In a cosmological context, dynamical Chern-Simons gravity is frequently used to model parity-violating imprints from the early universe. During the inflationary epoch, a tachyonic instability induced by the Chern-Simons term can source a non-vanishing parity-odd component in the primordial scalar trispectrum (the four-point correlation function) [Creque-Sarbinowski et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023JCAP...11..029C/abstract). The observational status of these signatures is currently the subject of active investigation. Ultimately, future space-based interferometers aim to decisively distinguish Chern-Simons parity violation from other theoretical extensions like [[massive-gravity|Massive gravity]], utilizing precision measurements of extreme mass-ratio inspirals to tightly constrain the underlying coupling parameters.

## Introduction and Theoretical Motivation

Chern-Simons gravity (CSG) is a well-motivated framework within the broader landscape of [[general-relativity-frameworks|General Relativity Frameworks]]. Unlike standard [[general-relativity|General Relativity]], which assumes that spacetime is symmetric under spatial inversion, CSG introduces explicit parity violation to the gravitational sector [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). The theory is fundamentally motivated by high-energy physics, emerging naturally as an effective theory from anomaly cancellations in string theory, as well as from loop quantum gravity and the Standard Model of particle physics [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). 

The mathematical hallmark of CSG is the addition of a parity-odd interaction term to the Einstein-Hilbert action. This term is characterized by a dynamical scalar field (often an axion) non-minimally coupled to the Pontryagin invariant, typically denoted as ${}^\ast R R$, which is a topological invariant constructed from the Riemann curvature tensor and its dual. This scalar field coupling introduces new degrees of freedom that modify the gravitational field equations, yielding distinct phenomenological signatures across multiple astrophysical and cosmological scales. 

## Mathematical Formalism and the Pontryagin Invariant

The full action in dynamical Chern-Simons gravity can be expressed as:
$$ S = \int d^4x \sqrt{-g} \left[ \kappa R + \frac{\alpha}{4} \theta \, ^*R R - \frac{1}{2} \partial_\mu \theta \partial^\mu \theta - V(\theta) \right] + S_{\rm mat} $$
where $\kappa = 1/(16\pi G)$, $R$ is the [[ricci-scalar|Ricci scalar]], $\theta$ is the pseudo-scalar field, $V(\theta)$ is its potential, and $\alpha$ determines the strength of the Chern-Simons coupling. In observational literature, the effective scale of this modification is frequently parameterized by dimensionless coupling constants such as $\xi$ or $\zeta$ [Ayzenberg et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018CQGra..35w5002A/abstract), [Fan et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251108221F/abstract).

The cornerstone of this modification is the Pontryagin invariant, $^*R RR$, which is defined by the contraction of the Riemann curvature tensor with its dual:
$$ ^*R R = ^*R^{\mu\nu\rho\sigma} R_{\nu\mu\rho\sigma} $$
The dual Riemann tensor itself is constructed using the completely antisymmetric Levi-Civita tensor $\epsilon^{\mu\nu\alpha\beta}$, such that $^*R^{\mu\nu\rho\sigma} = \frac{1}{2} \epsilon^{\mu\nu\alpha\beta} R_{\alpha\beta}^{\phantom{\alpha\beta}\rho\sigma}$. Because the Levi-Civita tensor changes sign under spatial inversion, the Pontryagin density is intrinsically parity-odd. When coupled to the parity-odd pseudo-scalar field $\theta$, the overall term added to the Lagrangian remains parity-even, but the resulting dynamics famously violate the parity symmetry of spacetime assumed in standard [[general-relativity|General Relativity]].

Varying the action with respect to the metric $g_{\mu\nu}$ yields the modified Einstein field equations:
$$ G_{\mu\nu} + \alpha C_{\mu\nu} = \frac{1}{2\kappa} \left( T_{\mu\nu}^{\rm mat} + T_{\mu\nu}^{(\theta)} \right) $$
where $G_{\mu\nu}$ is the Einstein tensor, $T_{\mu\nu}^{\rm mat}$ and $T_{\mu\nu}^{(\theta)}$ are the energy-momentum tensors for the matter and scalar fields, respectively, and $C_{\mu\nu}$ is the Chern-Simons tensor (a four-dimensional generalization of the Cotton tensor). Varying the action with respect to the scalar field yields its equation of motion:
$$ \Box \theta - \frac{dV}{d\theta} = -\frac{\alpha}{4} ^*R R $$
This Klein-Gordon equation reveals that the scalar field is directly sourced by spacetime curvature. 

In the strong-field regime around compact objects, the formalism guarantees that spherically symmetric vacuum solutions, such as the [[schwarzschild-metric|Schwarzschild metric]], remain unaffected because the Pontryagin invariant vanishes for such highly symmetric backgrounds. However, for rotating black holes, the Pontryagin density is non-zero, sourcing the scalar field and endowing rotating black holes with scalar "hair." 

## Deviations from the Kerr Metric in Rotating Black Holes

In standard [[general-relativity|General Relativity]], the exterior spacetime of an isolated, stationary, and axisymmetric rotating black hole is uniquely described by the Kerr metric. However, in dynamical Chern-Simons gravity, the parity-violating coupling between a scalar field and the Pontryagin invariant fundamentally alters the strong-field geometry.

The deviations from the Kerr metric manifest most prominently in the gravitomagnetic sector of the spacetime, which governs frame dragging and the Lense-Thirring effect. In Chern-Simons gravity, the scalar field modifies the off-diagonal metric components that dictate how spacetime is dragged by the black hole's rotation. For timelike particles in circular orbits around a slowly rotating black hole, this coupling explicitly alters both the orbital period $T$ and the geodetic precession angle $\Delta\Theta$. Theoretical analyses demonstrate that the change in the geodetic precession angle is inversely related to the change in the orbital period as a function of the coupling parameter $\xi$ [Chen et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010CQGra..27v5006C/abstract).

The modified spacetime geometry also heavily influences null geodesics, leading to observable differences in strong-field gravitational lensing and the resulting black hole shadow. Because Chern-Simons gravity violates parity, the capture cross-sections for photons depend asymmetrically on their orbital direction relative to the black hole's angular momentum. Specifically, a larger Chern-Simons coupling $\xi$ increases the capture rate of prograde photons, while conversely making retrograde photons harder to capture [Chen et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010CQGra..27v5006C/abstract). These parity-violating dynamics can distort the shape and size of the black hole shadow on milliarcsecond scales.

## Gravitational Wave Birefringence and Propagation

In [[general-relativity|General Relativity]], the two polarization states of [[gravitational-waves|Gravitational Waves]] propagate identically across cosmological distances. However, dynamical CS gravity induces a unique observational signature in the tensor sector known as *amplitude birefringence* [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). Under this mechanism, left- and right-handed circularly polarized gravitational waves still propagate at the exact same speed, but their respective amplitudes evolve differently as they travel through the Universe.

Observational tests of amplitude birefringence rely on comparing the luminosity distance derived from the gravitational wave signal with the true cosmological distance obtained from an electromagnetic counterpart. Due to the orbital geometry of binary neutron star mergers, the emitted [[gravitational-waves|Gravitational Waves]] are highly left- or right-circularly polarized along the axis of angular momentum. Under CS gravity, amplitude birefringence would cause the inferred gravitational wave distance to systematically deviate from the electromagnetically determined redshift distance.

Looking toward the era of future space-based detectors (such as LISA, TianQin, and Taiji), Extreme Mass-Ratio Inspirals (XMRIs) will offer a pristine laboratory for testing parity violation in the strong-field regime. The late-stage evolution of XMRI waveforms is highly sensitive to parity-violating differences between CS gravity and [[general-relativity|General Relativity]]. Depending on the orbital eccentricity of the source, such measurements are forecast to constrain the dimensionless Chern-Simons coupling parameter $\zeta$ to an accuracy of $10^{-3}$ for low-eccentricity orbits, and up to $10^{-6}$ for highly eccentric inspirals [Fan et al. (2025)](https://ui.adsabs.harvard.edu/abs/2025arXiv251108221F/abstract).

## Cosmological Signatures and the Early Universe

During the early universe, the presence of a dynamical CS term can significantly alter the evolution of cosmological perturbations. In many inflationary models, a scalar field (such as the inflaton or an axion-like spectator field) couples to the gravitational Pontryagin invariant. This chiral interaction induces amplitude birefringence in primordial [[gravitational-waves|Gravitational Waves]]. Specifically, the CS coupling triggers a tachyonic instability in one of the graviton helicity modes, leading to a highly polarized stochastic gravitational wave background [Creque-Sarbinowski et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023JCAP...11..029C/abstract), [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract).

The parity-violating nature of Chern-Simons gravity is prominently imprinted in higher-order statistics, most notably the primordial scalar trispectrum (the 4-point correlation function). Through graviton-mediated exchanges, the scalar perturbations develop a non-vanishing parity-odd component. The amplitude of this parity-odd signal is proportional to the degree of gravitational circular polarization, scaling as:
$$ \Pi_{\rm circ} \sim \sqrt{\epsilon} \left[ \frac{H^2}{M_{\rm Pl} f} \right] $$
where $\epsilon$ is the slow-roll parameter, $H$ is the inflationary Hubble scale, $M_{\rm Pl}$ is the [[planck-mass|Planck mass]], and $f$ is the CS decay constant [Creque-Sarbinowski et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023JCAP...11..029C/abstract). 

In specific momentum configurations, such as the exact equilateral shape, the ratio of parity-odd to parity-even trispectrum modes can reach $\mathcal{O}(10\%)$ [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract). For quasi-equilateral configurations, the parity-odd component can even surpass the parity-even one, producing a distinct signature of chiral [[scalar-tensor-theories|Scalar-tensor theories]] [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract), [Moretti et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241011801M/abstract).

## Observational Constraints

Current observational constraints on Chern-Simons gravity span multiple physical scales, from satellite-based weak-field tests to strong-field astrophysical environments and cosmological datasets. 

**Weak-Field and Gravitational Wave Constraints**
Early constraints on the parity-violating sector of Chern-Simons gravity were derived from near-Earth tests, specifically measurements of frame-dragging from the LAGEOS satellites [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). More recently, the dynamical formulation of the theory has been bounded by multimessenger astronomy. While the theory predicts amplitude birefringence, its requirement that left- and right-circularly polarized modes propagate at the speed of light is completely consistent with the stringent speed-of-gravity limits set by the LIGO-Virgo event GW170817 [Sakstein et al. (2017)](https://ui.adsabs.harvard.edu/abs/2017PhRvL.119y1303S/abstract). Because the theory preserves $c_{gw} = c$ and alters only the amplitude evolution, it safely survives this constraint [UNSUPPORTED: [Linder et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018JCAP...03..005L/abstract)]. Coincident observations of [[gravitational-waves|Gravitational Waves]] and short gamma-ray bursts using the advanced LIGO-Virgo network can theoretically constrain the propagating sector roughly two orders of magnitude better than the LAGEOS satellite limits [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract). 

**Strong-Field Tests and Black Hole Shadows**
Recent black hole shadow observations by the Event Horizon Telescope (EHT) of M87* and Sagittarius A* are consistent with [[general-relativity|General Relativity]]. However, likelihood analyses indicate that present EHT resolving power is not yet sensitive enough to meaningfully constrain dynamical Chern-Simons gravity for slowly-rotating supermassive black holes. The theoretical shadow deviations in the slow-rotation regime are masked by observational uncertainties. Such observations will become highly restrictive only if future imaging targets black holes with high dimensionless spins ($a^* > 0.9$ [UNSUPPORTED]) [Ayzenberg et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018CQGra..35w5002A/abstract). 

**Cosmological and Large-Scale Structure Tensions**
On cosmological scales, the literature currently reflects an active tension regarding the observation of primordial parity-violating signatures. Recent analyses of galaxy clustering data from the BOSS survey have found potential hints of parity-odd modes in the large-scale structure 4-point correlation function [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract), [Moretti et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241011801M/abstract). Conversely, blind tests using Planck cosmic microwave background temperature fluctuations find no evidence for parity violation, showing consistency with standard physics at the $0.4\sigma$ level [Philcox et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023PhRvL.131r1001P/abstract). It remains an open question whether the parity-odd signals detected in late-time large-scale structure are genuine primordial signatures of Chern-Simons gravity or the result of late-time systematics [Philcox et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023PhRvL.131r1001P/abstract), [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract).

## Historical Development and Theoretical Evolution

The historical development of Chern-Simons gravity is characterized by the transition of Chern-Simons topological terms from 3D particle physics (such as the Jackiw-Pi model [UNSUPPORTED]) into a 4D dynamical theory of gravitation. Extensions to standard [[general-relativity|General Relativity]] have been heavily motivated by the quest for a fundamental [[quantum-field-theory|Quantum field theory]] of gravity. Specifically, gravitational parity violation emerges as a natural consequence of several high-energy paradigms, including string theory compactifications and loop quantum gravity [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract).

In its modern 4D formulation, dynamical Chern-Simons gravity is typically treated as an effective field theory. This theoretical evolution represents a significant departure from standard [[general-relativity|General Relativity]], as it explicitly breaks the parity symmetry of spacetime and introduces "hair" to black hole solutions. As the theory evolved into a cosmological model, its implications for the early universe became a major focus, specifically establishing that the Chern-Simons term leads to non-vanishing parity-odd components in the primordial scalar trispectrum [Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract), [Moretti et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241011801M/abstract). To bridge the gap between theoretical formulation and observational constraints, recent work has increasingly shifted toward quantitative strong-field tests utilizing upcoming space-based gravitational wave interferometers [Yunes et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract).

## Open Questions and Future Directions

Despite its theoretical appeal, Chern-Simons gravity faces several unresolved foundational and observational challenges. As a higher-derivative extension of [[general-relativity|General Relativity]], the theory risks introducing pathological ghost instabilities [UNSUPPORTED] if not strictly treated as an effective field theory valid only below a certain energy cutoff. Furthermore, the coupling of the dynamical scalar field to the Pontryagin invariant generally violates the Strong equivalence principle [UNSUPPORTED]. It remains an open question whether a nonlinear screening mechanism exists that can adequately suppress these scalar interactions to satisfy stringent Solar System constraints while still allowing for detectable strong-field signatures.

In the cosmological regime, resolving whether the parity-violating signals detected in large-scale structure (LSS) surveys are of genuine primordial origin or if they are simply the result of late-time systematic errors is a major objective. Upcoming massive radio surveys, such as those conducted by the Square Kilometre Array [UNSUPPORTED] (and other 21-cm intensity mapping experiments), are forecasted to rigorously test the parity-violating trispectrum with a massive number of linear modes, potentially resolving the current tension between the CMB and LSS datasets once and for all [Creque-Sarbinowski et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023JCAP...11..029C/abstract).

A primary observational objective for next-generation detectors like LISA is to decisively distinguish the parity-violating birefringence of Chern-Simons gravity from the modified dispersion relations characteristic of a [[massive-gravity|Massive gravity]] [UNSUPPORTED]. Simultaneously, future higher-resolution imaging of supermassive black holes with extreme dimensionless spins may be capable of isolating the theory's unique modifications to geodetic precession and photon capture rates [Ayzenberg et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018CQGra..35w5002A/abstract). 

***

### Change Log

1. **Coherence & Redundancy**:
   - Significantly reduced repetitive explanations. The draft originally explained the mechanisms of amplitude birefringence, black hole scalar hair, and the BOSS vs. Planck LSS tension redundantly across four or more separate sections.
   - Restructured the article to focus section-by-section on *Theory* (Math/Formalism), *Phenomenology* (Kerr Deviations, GW Propagation, Cosmology), and *Results* (Observational Constraints). Moved all the hard experimental limits (EHT, LAGEOS, LIGO, Planck, BOSS) into the dedicated "Observational Constraints" section, massively improving the narrative arc and readability.
2. **Accuracy & Unsupported Claims**:
   - Flagged `[UNSUPPORTED]` next to `[Linder et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018JCAP...03..005L/abstract)` attributing Chern-Simons gravity's survival of GW170817 constraints to that specific paper, as the abstract for 2018JCAP...03..005L addresses "No slip gravity" rather than Chern-Simons explicitly.
   - Flagged `[UNSUPPORTED]` next to the specific value of $a^* > 0.9$ for rapidly rotating black holes, as the provided abstract (2018CQGra..35w5002A) possesses a blank/missing value in its text ("with dimensionless spins , could be used...").
   - Flagged `[UNSUPPORTED]` next to mentions of the "Jackiw-Pi model", "Square Kilometre Array", "pathological ghost instabilities", "Strong equivalence principle", and "massive graviton" modified dispersion relations, as none of the provided abstracts explicitly verify these claims within the context of Chern-Simons gravity.
3. **Citations & Cross-links**:
   - Corrected an inaccurate citation in the lead: The draft cited Moffat's STVG (2006JCAP...03..004M) and Bekenstein's TeVeS (2011RSPTA.369.5003B) as examples of "chiral scalar-tensor theories" when discussing Chern-Simons gravity. Replaced these with appropriate citations to CSG trispectrum papers from the provided list (`[Fujita et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract), [Moretti et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024arXiv241011801M/abstract)`).
   - Ensured all wiki cross-links matched the provided valid list perfectly (e.g., added a link to [[ricci-scalar|Ricci scalar]] and [[quantum-field-theory|Quantum field theory]], adjusted capitalization to [[scalar-tensor-theories|Scalar-tensor theories]]).
4. **Style**:
   - Smoothed out textbook-style explanations (e.g., "standard General Relativity textbooks" was revised to just "standard [[general-relativity|General Relativity]]" to align with encyclopedic tone while maintaining consistency with the textbook snippet).

---

## Known Issues

*This article was auto-generated by [Lodestone](https://github.com/lodestone) and has not fully passed editorial review.*

> [!warning] Reviewer Notes
> This article has **6** flagged issue(s) (severity: **major**).
>
> **1. [hallucination]** in *Mathematical Formalism and the Pontryagin Invariant*
> The action equation, the definition of the Pontryagin invariant, the modified Einstein field equations, and the Klein-Gordon equation are completely absent from the provided abstracts and textbook material. The text relies on external knowledge to formulate this entire section.
> → *Suggested fix:* Remove the hallucinated mathematical equations and definitions, restricting the mathematical formalism to the scaling relation $\Pi_{\rm circ}$, which is the only equation actually supported by the source material (2023JCAP...11..029C).
>
> **2. [hallucination]** in *Lead*
> None of the provided abstracts state that the Schwarzschild metric remains unaffected in this theory, nor do they claim that rotating black holes acquire a "scalar dipole charge" or "hair." While abstract 2010CQGra..27v5006C mentions slowly rotating black holes in Chern-Simons gravity, the specific claims about scalar hair and the Schwarzschild metric are unsupported.
> → *Suggested fix:* Remove these unsupported claims and focus solely on the effects explicitly mentioned in the abstracts, such as modifications to geodetic precession and asymmetric photon capture rates.
>
> **3. [factual error]** in *Mathematical Formalism and the Pontryagin Invariant*
> Abstract 2018CQGra..35w5002A does not mention the coupling parameter $\xi$; it mentions a blank/missing value for dimensionless spins. The parameter $\xi$ is actually introduced and discussed in 2010CQGra..27v5006C.
> → *Suggested fix:* Correct the citation for the parameter $\xi$ by replacing [Ayzenberg et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018CQGra..35w5002A/abstract) with [Chen et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010CQGra..27v5006C/abstract).
>
> **4. [hallucination]** in *Deviations from the Kerr Metric in Rotating Black Holes*
> The provided abstracts do not contain any information regarding the "gravitomagnetic sector", "frame dragging", the "Lense-Thirring effect", or "off-diagonal metric components" in the context of Chern-Simons gravity. These details are imported from outside knowledge.
> → *Suggested fix:* Delete these sentences, as they rely on external knowledge. Restrict the discussion to geodetic precession and orbital period changes as detailed in 2010CQGra..27v5006C.
>
> **5. [hallucination]** in *Observational Constraints*
> Abstract 2017PhRvL.119y1303S discusses constraints on general scalar-tensor theories and Galileons but does not mention Chern-Simons gravity. Asserting that Chern-Simons gravity is perfectly consistent with and survives the GW170817 limits is a theoretical synthesis not explicitly supported by the text.
> → *Suggested fix:* Remove the claim that Chern-Simons gravity survives the GW170817 constraints, as it is an unsupported deduction.
>
> **6. [hallucination]** in *Open Questions and Future Directions*
> While screening mechanisms are heavily discussed for other theories (like Chameleon, Galileon, and f(R) gravity) in the provided abstracts, they are never associated with Chern-Simons gravity. Stating this is an open question for Chern-Simons gravity is an unsupported extrapolation.
> → *Suggested fix:* Remove the sentence discussing nonlinear screening mechanisms in relation to Chern-Simons gravity.
>

> [!todo] Papers Not Yet Incorporated
> **6** relevant paper(s) could not be fully integrated:
>
> - [Implications of axionic hair on the shadow of M87*](https://ui.adsabs.harvard.edu/abs/2020PhRvD.101j4057B/abstract) (`2020PhRvD.101j4057B`)
>   - Suggested section: *Observational Constraints*
>   - Incorporate findings from M87* shadow observations suggesting that axionic hair resulting from Kalb-Ramond/axion field couplings (similar to Chern-Simons pseudo-scalars) could provide a strong-field test where current results might favor specific energy-condition-violating parameters.
> - [Parity-odd galaxy bispectrum](https://ui.adsabs.harvard.edu/abs/2021PhRvD.102b3530J/abstract) (`2021PhRvD.102b3530J`)
>   - Suggested section: *Cosmological Signatures and the Early Universe*
>   - Mention that beyond the trispectrum, the parity-odd imaginary part of the galaxy bispectrum (3-point function) generated through redshift-space distortions offers a 'guaranteed' consistency test for parity-violating physics in modified gravity.
> - [Full Parity-Violating Trispectrum in Axion Inflation: Reduction to Low-D Integrals](https://ui.adsabs.harvard.edu/abs/2024arXiv241216037R/abstract) (`2024arXiv241216037R`)
>   - Suggested section: *Cosmological Signatures and the Early Universe*
>   - Note recent mathematical developments in computing the late-time 4-point correlation function (4PCF) for axion-gauge field inflationary models by reducing high-dimensional loop integrals to more manageable radial convolutions.
> - [Cotton gravity and 84 galaxy rotation curves](https://ui.adsabs.harvard.edu/abs/2022PhRvD.106f4044H/abstract) (`2022PhRvD.106f4044H`)
>   - Suggested section: *Introduction and Theoretical Motivation*
>   - Add 'Cotton gravity' as a related theoretical extension that uses the Cotton tensor (the 3D precursor to the Chern-Simons tensor) to model galactic dynamics without dark matter.
> - [Testing Cotton gravity as dark matter substitute with weak lensing](https://ui.adsabs.harvard.edu/abs/2024arXiv240507215M/abstract) (`2024arXiv240507215M`)
>   - Suggested section: *Observational Constraints*
>   - Include observational constraints on Cotton gravity from galaxy-galaxy lensing data (SDSS DR7), which indicate that the theory's linear potential term cannot fully replace the role of dark matter on its own.
> - [A decisive test to confirm or rule out the existence of dark matter emulators using gravitational wave observations](https://ui.adsabs.harvard.edu/abs/2008CQGra..25r4008K/abstract) (`2008CQGra..25r4008K`)
>   - Suggested section: *Gravitational Wave Birefringence and Propagation*
>   - Contrast CS amplitude birefringence with 'dark matter emulators' where parity violation or modified metrics could cause measurable time lags between gravitational and electromagnetic signals from the same cosmic event.

---

## References

- Aguirre et al. (2001). *TOPICAL REVIEW: Astrophysical constraints on modifying gravity at large distances*. [ADS](https://ui.adsabs.harvard.edu/abs/2001CQGra..18R.223A/abstract)
- Albuquerque et al. (2022). *A designer approach to f(Q) gravity and cosmological implications*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PDU....3500980A/abstract)
- Alcaniz et al. (2004). *Complementary constraints on brane cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2005PhRvD..71h3513A/abstract)
- Alexander et al. (2005). *Stellar processes near the massive black hole in the Galactic center [review article]*. [ADS](https://ui.adsabs.harvard.edu/abs/2005PhR...419...65A/abstract)
- Amekhyan et al. (2021). *Observational scalings testing modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2021RAA....21..309A/abstract)
- Amelino-Camelia et al. (1998). *Sensitivity of Astrophysical Observations to Gravity-Induced Wave Dispersion in Vacuo*. [ADS](https://ui.adsabs.harvard.edu/abs/1998astro.ph.10483A/abstract)
- Anagnostopoulos et al. (2019). *IR quantum gravity solves naturally cosmic acceleration and its coincidence problem*. [ADS](https://ui.adsabs.harvard.edu/abs/2019IJMPD..2844013A/abstract)
- Aparicio Resco et al. (2017). *Parametrizing growth in dark energy and modified gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2017arXiv170708964A/abstract)
- Aparicio Resco et al. (2020). *Modified gravity or imperfect dark matter: a model-independent discrimination*. [ADS](https://ui.adsabs.harvard.edu/abs/2021JCAP...02..020A/abstract)
- Arnold et al. (2019). *Realistic simulations of galaxy formation in f(R) modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2019NatAs...3..945A/abstract)
- Avelino et al. (2016). *Unveiling the Dynamics of the Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2016Symm....8...70A/abstract)
- Aviles et al. (2019). *Marked correlation functions in perturbation theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2020JCAP...01..006A/abstract)
- Aviles et al. (2025). *Testing gravity with the full-shape galaxy power spectrum: First constraints on scale-dependent modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2025PhRvD.111b1301A/abstract)
- Ayzenberg et al. (2018). *Black hole shadow as a test of general relativity: quadratic gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2018CQGra..35w5002A/abstract)
- Baker et al. (2020). *Constraining scalar-tensor modified gravity with gravitational waves and large scale structure surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2021JCAP...01..068B/abstract)
- Banerjee et al. (2016). *Constraints on fourth order gravity from binary pulsars and gravitational waves*. [ADS](https://ui.adsabs.harvard.edu/abs/2017PhRvD..96h4015B/abstract)
- Banerjee et al. (2019). *Implications of axionic hair on the shadow of M87**. [ADS](https://ui.adsabs.harvard.edu/abs/2020PhRvD.101j4057B/abstract)
- Banerjee et al. (2019). *Silhouette of M87*: A new window to peek into the world of hidden dimensions*. [ADS](https://ui.adsabs.harvard.edu/abs/2020PhRvD.101d1301B/abstract)
- Banik et al. (2021). *From Galactic Bars to the Hubble Tension: Weighing Up the Astrophysical Evidence for Milgromian Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2022Symm...14.1331B/abstract)
- Barreira et al. (2012). *Linear perturbations in Galileon gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2012PhRvD..86l4016B/abstract)
- Barreira et al. (2013). *Parameter space in Galileon gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PhRvD..87j3511B/abstract)
- Baryshev et al. (2006). *Conceptual Problems of the Standard Cosmological Model*. [ADS](https://ui.adsabs.harvard.edu/abs/2006AIPC..822...23B/abstract)
- Baryshev et al. (2008). *Expanding space: the root of conceptual problems of the cosmological physics*. [ADS](https://ui.adsabs.harvard.edu/abs/2008pc2..conf...20B/abstract)
- Bassi et al. (2023). *Cosmological evolution in bimetric gravity: observational constraints and LSS signatures*. [ADS](https://ui.adsabs.harvard.edu/abs/2023EPJC...83..525B/abstract)
- Bekenstein et al. (2004). *An alternative to the dark matter paradigm: relativistic MOND gravitation*. [ADS](https://ui.adsabs.harvard.edu/abs/2004astro.ph.12652B/abstract)
- Bekenstein et al. (2011). *Tensor-vector-scalar-modified gravity: from small scale to cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2011RSPTA.369.5003B/abstract)
- Bellini et al. (2015). *Constraints on deviations from ΛCDM within Horndeski gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016JCAP...02..053B/abstract)
- Bellini et al. (2015). *Nonlinear evolution of the baryon acoustic oscillation scale in alternative theories of gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2015PhRvD..92f3522B/abstract)
- Bellomo et al. (2016). *Hiding neutrino mass in modified gravity cosmologies*. [ADS](https://ui.adsabs.harvard.edu/abs/2017JCAP...02..043B/abstract)
- Benisty et al. (2021). *Dark energy interactions near the Galactic Center*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PhRvD.105b4052B/abstract)
- Benisty et al. (2025). *The Scale for the Expansion of the Universe: From Local Structures to Cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250403009B/abstract)
- Berezhiani et al. (2009). *Mirror matter, mirror gravity and galactic rotational curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2010EPJC...70..305B/abstract)
- Bernal et al. (2015). *Dynamics of Clusters of Galaxies with Extended F(χ) Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2019RMxAA..55..237B/abstract)
- Bertolami et al. (2006). *General Theory of Relativity: Will it survive the next decade?*. [ADS](https://ui.adsabs.harvard.edu/abs/2006gr.qc.....2016B/abstract)
- Bertolami et al. (2008). *General Theory of Relativity: Will It Survive the Next Decade?*. [ADS](https://ui.adsabs.harvard.edu/abs/2008ASSL..349...27B/abstract)
- Bertolami et al. (2022). *Primordial magnetic fields in theories of gravity with non-minimal coupling between curvature and matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2022GReGr..54...82B/abstract)
- Bertschinger et al. (2011). *One gravitational potential or two? Forecasts and tests*. [ADS](https://ui.adsabs.harvard.edu/abs/2011RSPTA.369.4947B/abstract)
- Bezares-Roder et al. (2007). *Higgs scalar tensor theory for gravity and the flat rotation curves of spiral galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2007GReGr..39.1259B/abstract)
- Bhatia et al. (2024). *Phenomenology of renormalization group improved gravity from the kinematics of SPARC galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240300531B/abstract)
- Bhatia et al. (2024). *Phenomenology of renormalization group improved gravity from the kinematics of SPARC galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2024PhRvD.110l4014B/abstract)
- Bicudo et al. (2016). *Tighter bounds on a hypothetical graviton screening mass from the gravitational wave observation GW150914 at LIGO*. [ADS](https://ui.adsabs.harvard.edu/abs/2016arXiv160204337B/abstract)
- Blanchet et al. (2008). *Phenomenology of the Modified Newtonian Dynamics and the Concordance Cosmological Scenario*. [ADS](https://ui.adsabs.harvard.edu/abs/2008arXiv0807.1200B/abstract)
- Bludman et al. (2006). *Cosmological Acceleration: Dark Energy or Modified Gravity?*. [ADS](https://ui.adsabs.harvard.edu/abs/2007soch.conf....9B/abstract)
- Bolis et al. (2018). *Integrated Sachs-Wolfe-galaxy cross-correlation bounds on the two branches of the minimal theory of massive gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2018PhRvD..98b4010B/abstract)
- Bonvin et al. (2020). *A null test of the equivalence principle using relativistic effects in galaxy surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2020JCAP...08..004B/abstract)
- Bonvin et al. (2022). *Modified Einstein versus modified Euler for dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2023NatAs...7.1127B/abstract)
- Borka Jovanović et al. (2016). *Recovering the fundamental plane of galaxies by $f(R)$ gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016arXiv161003336B/abstract)
- Bose et al. (2018). *Cosmological Tests of Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2018arXiv180200989B/abstract)
- Bouchè et al. (2022). *Testing non-local gravity by clusters of galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2022EPJC...82..652B/abstract)
- Bouchè et al. (2023). *Addressing Cosmological Tensions by Non-Local Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv230101503B/abstract)
- Bouché et al. (2022). *Addressing Cosmological Tensions by Non-Local Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2022Univ....9...27B/abstract)
- Brando et al. (2021). *Fully relativistic predictions in Horndeski gravity from standard Newtonian N-body simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2021JCAP...09..024B/abstract)
- Brax et al. (2015). *Galaxy cluster constraints on the coupling to photons of low-mass scalars*. [ADS](https://ui.adsabs.harvard.edu/abs/2015PhRvD..92h3501B/abstract)
- Burrage et al. (2018). *Symmetron scalar fields: Modified gravity, dark matter, or both?*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d3539B/abstract)
- Böhmer et al. (2008). *The generalized virial theorem in f(R) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2008JCAP...03..024B/abstract)
- Capozziello et al. (2004). *Higher Order Curvature Theories of Gravity Matched with Observations: a Bridge Between Dark Energy and Dark Matter Problems*. [ADS](https://ui.adsabs.harvard.edu/abs/2005AIPC..751...54C/abstract)
- Capozziello et al. (2004). *Can higher order curvature theories explain rotation curves of galaxies?*. [ADS](https://ui.adsabs.harvard.edu/abs/2004PhLA..326..292C/abstract)
- Capozziello et al. (2008). *Extended theories of gravity and their cosmological and astrophysical applications*. [ADS](https://ui.adsabs.harvard.edu/abs/2008GReGr..40..357C/abstract)
- Capozziello et al. (2013). *The virial theorem and the dark matter problem in hybrid metric-Palatini gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2013JCAP...07..024C/abstract)
- Caprini et al. (2018). *Astrophysical gravitational waves in conformal gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2018PhRvD..98h4002C/abstract)
- Cardone et al. (2008). *Halting eternal acceleration with an effective negative cosmological constant*. [ADS](https://ui.adsabs.harvard.edu/abs/2008CQGra..25m5010C/abstract)
- Cardone et al. (2012). *Constraining massive gravity with recent cosmological data*. [ADS](https://ui.adsabs.harvard.edu/abs/2012PhRvD..85l4005C/abstract)
- Cesare et al. (2021). *The dynamics of three nearby E0 galaxies in refracted gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2022A&A...657A.133C/abstract)
- Cesare et al. (2023). *Dark Coincidences: Small-Scale Solutions with Refracted Gravity and MOND*. [ADS](https://ui.adsabs.harvard.edu/abs/2023Univ....9...56C/abstract)
- Cesare et al. (2024). *Refracted Gravity Solutions from Small to Large Scales*. [ADS](https://ui.adsabs.harvard.edu/abs/2024Astro...3...68C/abstract)
- Chae et al. (2020). *Testing the Strong Equivalence Principle: Detection of the External Field Effect in Rotationally Supported Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2020ApJ...904...51C/abstract)
- Chakravarty et al. (2016). *Testing theories of gravity and supergravity with inflation and observations of the cosmic microwave background*. [ADS](https://ui.adsabs.harvard.edu/abs/2017IJMPD..2630023C/abstract)
- Chan et al. (2023). *The Solar system test for the general modified gravity theories*. [ADS](https://ui.adsabs.harvard.edu/abs/2023MNRAS.518.6238C/abstract)
- Chen et al. (2010). *Geodetic precession and strong gravitational lensing in dynamical Chern-Simons-modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2010CQGra..27v5006C/abstract)
- Chen et al. (2022). *Constraining Brans-Dicke Cosmology with the CSST Galaxy Clustering Spectroscopic Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2022RAA....22e5021C/abstract)
- Christodoulou et al. (2018). *Interposing a varying gravitational constant between modified Newtonian dynamics and weak Weyl gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2018MNRAS.479L.143C/abstract)
- Christodoulou et al. (2019). *Gravitational potential and non-relativistic Lagrangian in modified gravity with varying G*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483L..85C/abstract)
- Coley et al. (1988). *Constraint on nonmetric theories of gravity from supernova 1987A*. [ADS](https://ui.adsabs.harvard.edu/abs/1988PhRvD..38.2927C/abstract)
- Corda et al. (2012). *High-energy scalarons in R<SUP>2</SUP> gravity as a model for Dark Matter in galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2012APh....35..362C/abstract)
- Creque-Sarbinowski et al. (2023). *Parity-violating trispectrum from Chern-Simons gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2023JCAP...11..029C/abstract)
- D'Addio et al. (2021). *Orbits in bootstrapped Newtonian gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PhRvD.105j4010D/abstract)
- Daniel et al. (2010). *Confronting general relativity with further cosmological data*. [ADS](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82j3523D/abstract)
- Das et al. (2012). *Mach Principle and a new theory of gravitation*. [ADS](https://ui.adsabs.harvard.edu/abs/2012arXiv1206.6755D/abstract)
- Das et al. (2023). *Aspects of Machian Gravity (I): A Mathematical Formulation for Mach's Principle*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv230804503D/abstract)
- Das et al. (2023). *Aspects of Machian Gravity (II): Testing Theory against Rotation Curves of 175 SPARC Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv230900057D/abstract)
- Das et al. (2023). *Aspects of Machian Gravity (III): Testing Theory against Galaxy Cluster mass*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231206312D/abstract)
- de Felice et al. (2009). *Matter Instabilities in General Gauss-Bonnet Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2010MPLA...25..885D/abstract)
- de Felice et al. (2010). *Matter instabilities in general Gauss-Bonnet gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2010PhRvD..81b3532D/abstract)
- De Martino et al. (2013). *Constraining f(R) gravity with Planck data on galaxy cluster profiles*. [ADS](https://ui.adsabs.harvard.edu/abs/2014MNRAS.442..921D/abstract)
- De Martino et al. (2016). *f (R )-gravity model of the Sunyaev-Zeldovich profile of the Coma cluster compatible with Planck data*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhRvD..93l4043D/abstract)
- De Martino et al. (2017). *On the universality of MOG weak field approximation at galaxy cluster scale*. [ADS](https://ui.adsabs.harvard.edu/abs/2017PhLB..770..440D/abstract)
- de Martino et al. (2020). *Dark Matters on the Scale of Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2020Univ....6..107D/abstract)
- de Martino et al. (2020). *Giant low-surface-brightness dwarf galaxy as a test bench for MOdified Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2020MNRAS.493.2373D/abstract)
- Deffayet et al. (2007). *Probing Gravity with Spacetime Sirens*. [ADS](https://ui.adsabs.harvard.edu/abs/2007ApJ...668L.143D/abstract)
- Demianski et al. (2006). *Accelerating universe in scalar tensor models - comparison of theoretical predictions with observations*. [ADS](https://ui.adsabs.harvard.edu/abs/2006A&A...454...55D/abstract)
- Demianski et al. (2007). *Cosmological models in scalar tensor theories of gravity and observations: a class of general solutions*. [ADS](https://ui.adsabs.harvard.edu/abs/2008A&A...481..279D/abstract)
- Denissenya et al. (2017). *Cosmic growth signatures of modified gravitational strength*. [ADS](https://ui.adsabs.harvard.edu/abs/2017JCAP...06..030D/abstract)
- Diaferio et al. (2012). *The Acceleration Scale, Modified Newtonian Dynamics, and Sterile Neutrinos*. [ADS](https://ui.adsabs.harvard.edu/abs/2012arXiv1206.6231D/abstract)
- Ding et al. (2011). *Strong gravitational lensing in a noncommutative black-hole spacetime*. [ADS](https://ui.adsabs.harvard.edu/abs/2011PhRvD..83h4005D/abstract)
- Dirian et al. (2017). *Changing the Bayesian prior: Absolute neutrino mass constraints in nonlocal gravity<SUP>*</SUP>*. [ADS](https://ui.adsabs.harvard.edu/abs/2017PhRvD..96h3513D/abstract)
- Doré et al. (2007). *Testing Gravity with the CFHTLS-Wide Cosmic Shear Survey and SDSS LRGs*. [ADS](https://ui.adsabs.harvard.edu/abs/2007arXiv0712.1599D/abstract)
- dos Santos et al. (2021). *Observational constraints on f(T) gravity from model-independent data*. [ADS](https://ui.adsabs.harvard.edu/abs/2022EPJC...82..823D/abstract)
- Du et al. (2014). *Large scale structure formation in Eddington-inspired Born-Infeld gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2014PhRvD..90d4054D/abstract)
- Exirifard et al. (2011). *GravitoMagnetic force in modified Newtonian dynamics*. [ADS](https://ui.adsabs.harvard.edu/abs/2013JCAP...08..046E/abstract)
- Famaey et al. (2013). *Challenges for ΛCDM and MOND*. [ADS](https://ui.adsabs.harvard.edu/abs/2013JPhCS.437a2001F/abstract)
- Fan et al. (2025). *Constraining modified theories of gravity through the detection of one extremely large mass-ratio inspiral*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251108221F/abstract)
- Farina et al. (2011). *Dynamics of the Laplace-Runge-Lenz vector in the quantum-corrected Newton gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2011PhRvD..83l4037F/abstract)
- Farsi et al. (2023). *Evolution of spherical overdensities in energy-momentum-squared gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2023PhRvD.108b3524F/abstract)
- Farzan et al. (2014). *Decaying vector dark matter as an explanation for the 3.5 keV line from galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2014JCAP...11..015F/abstract)
- Fay et al. (2007). *f(R) gravity theories in Palatini formalism: Cosmological dynamics and observational constraints*. [ADS](https://ui.adsabs.harvard.edu/abs/2007PhRvD..75f3509F/abstract)
- Ferreira et al. (2009). *Einstein’s Theory of Gravity and the Problem of Missing Mass*. [ADS](https://ui.adsabs.harvard.edu/abs/2009Sci...326..812F/abstract)
- Ferté et al. (2017). *Testing gravity on cosmological scales with cosmic shear, cosmic microwave background anisotropies, and redshift-space distortions*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD..99h3512F/abstract)
- Frusciante et al. (2015). *Hořava Gravity in the Effective Field Theory formalism: From cosmology to observational constraints*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PDU....13....7F/abstract)
- Frusciante et al. (2020). *Cosmological constraints on Hořava gravity revised in light of GW170817 and GRB170817A and the degeneracy with massive neutrinos*. [ADS](https://ui.adsabs.harvard.edu/abs/2021PhRvD.103j4060F/abstract)
- Frusciante et al. (2024). *Euclid: Constraining linearly scale-independent modifications of gravity with the spectroscopic and photometric primary probes*. [ADS](https://ui.adsabs.harvard.edu/abs/2024A&A...690A.133F/abstract)
- Fujita et al. (2024). *Parity-violating scalar trispectrum from a rolling axion during inflation*. [ADS](https://ui.adsabs.harvard.edu/abs/2024JCAP...05..127F/abstract)
- Ganesh et al. (2024). *Many body gravity and the galaxy rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240313019G/abstract)
- Ganesh et al. (2024). *Many body gravity and the galaxy rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2024EPJC...84..935G/abstract)
- Ganesh et al. (2025). *Many body gravity and the bullet cluster*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250105126G/abstract)
- García-Bellido et al. (1993). *Dark Matter with Variable Masses*. [ADS](https://ui.adsabs.harvard.edu/abs/1993IJMPD...2...85G/abstract)
- Gervani et al. (2026). *Linear perturbation theory and structure formation in a Brans-Dicke theory of gravity without dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260122937G/abstract)
- Giannantonio et al. (2008). *Measuring dark energy with the integrated Sachs-Wolfe effect*. [ADS](https://ui.adsabs.harvard.edu/abs/2008arXiv0805.3645G/abstract)
- Gironés et al. (2009). *Cosmological data analysis of f(R) gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2010JCAP...11..004G/abstract)
- Gonzalez et al. (2004). *The evolution of density perturbations in two quintessence models*. [ADS](https://ui.adsabs.harvard.edu/abs/2004astro.ph..3031G/abstract)
- Gonzalez et al. (2007). *Evolution of density perturbations in double exponential quintessence models*. [ADS](https://ui.adsabs.harvard.edu/abs/2007Ap&SS.310...13G/abstract)
- González et al. (2001). *Local constraints on the oscillating G model*. [ADS](https://ui.adsabs.harvard.edu/abs/2001PhRvD..64d7504G/abstract)
- Gurzadyan et al. (2017). *On the common nature of dark matter and dark energy: galaxy groups*. [ADS](https://ui.adsabs.harvard.edu/abs/2017arXiv171210014G/abstract)
- Gurzadyan et al. (2019). *On the common nature of dark matter and dark energy: Galaxy groups*. [ADS](https://ui.adsabs.harvard.edu/abs/2019EPJP..134...14G/abstract)
- Gurzadyan et al. (2020). *On the Lambda-evolution of galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2020EPJC...80...24G/abstract)
- Gómez et al. (2023). *New non-Abelian Reissner-Nordström black hole solutions in the generalized SU(2) Proca theory and some astrophysical implications*. [ADS](https://ui.adsabs.harvard.edu/abs/2023PhRvD.108b4069G/abstract)
- Hamber et al. (2018). *Gravitational Fluctuations as an Alternative to Inflation*. [ADS](https://ui.adsabs.harvard.edu/abs/2019Univ....5...31H/abstract)
- Hammami et al. (2015). *Cosmological simulations with hydrodynamics of screened scalar-tensor gravity with non-universal coupling*. [ADS](https://ui.adsabs.harvard.edu/abs/2015A&A...584A..57H/abstract)
- Hammami et al. (2016). *Probing modified gravity via the mass-temperature relation of galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2017A&A...598A.132H/abstract)
- Harada et al. (2022). *Cotton gravity and 84 galaxy rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PhRvD.106f4044H/abstract)
- Harko et al. (2010). *Galactic rotation curves in modified gravity with nonminimal coupling between matter and geometry*. [ADS](https://ui.adsabs.harvard.edu/abs/2010PhRvD..81h4050H/abstract)
- Hawking et al. (1989). *Three Hundred Years of Gravitation*. [ADS](https://ui.adsabs.harvard.edu/abs/1989thyg.book.....H/abstract)
- He et al. (2018). *No evidence for modifications of gravity from galaxy motions on cosmological scales*. [ADS](https://ui.adsabs.harvard.edu/abs/2018NatAs...2..967H/abstract)
- Hobson et al. (2021). *Conformal gravity does not predict flat galaxy rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2021PhRvD.104f4014H/abstract)
- Hobson et al. (2022). *Conformally-rescaled Schwarzschild metrics do not predict flat galaxy rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2022EPJC...82..585H/abstract)
- Hogan et al. (2004). *Discrete spectrum of inflationary fluctuations*. [ADS](https://ui.adsabs.harvard.edu/abs/2004PhRvD..70h3521H/abstract)
- Holanda et al. (2016). *Can galaxy clusters, type Ia supernovae, and the cosmic microwave background rule out a class of modified gravity theories?*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhRvD..94j4037H/abstract)
- Horne et al. (2016). *X-ray gas in the galaxy cluster Abell 2029: conformal gravity versus dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2006MNRAS.369.1667H/abstract)
- Hu et al. (2007). *Parametrized post-Friedmann framework for modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2007PhRvD..76j4043H/abstract)
- Hu et al. (2014). *Exploring massive neutrinos in dark cosmologies with eftcamb/EFTCosmoMC*. [ADS](https://ui.adsabs.harvard.edu/abs/2015PhRvD..91f3524H/abstract)
- Hu et al. (2016). *Testing Hu-Sawicki f(R) gravity with the effective field theory approach*. [ADS](https://ui.adsabs.harvard.edu/abs/2016MNRAS.459.3880H/abstract)
- Hui et al. (2012). *Proposal for an Observational Test of the Vainshtein Mechanism*. [ADS](https://ui.adsabs.harvard.edu/abs/2012PhRvL.109e1304H/abstract)
- Inoue et al. (2003). *Gravitational Waves from Sub-Lunar-Mass Primordial Black-Hole Binaries: A New Probe of Extradimensions*. [ADS](https://ui.adsabs.harvard.edu/abs/2003PhRvL..91b1101I/abstract)
- Ivanov et al. (2006). *Galaxy number counts in a presence of the graviton background*. [ADS](https://ui.adsabs.harvard.edu/abs/2006astro.ph..6223I/abstract)
- Jain et al. (2008). *Observational tests of modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2008PhRvD..78f3503J/abstract)
- Jain et al. (2010). *Cosmological tests of gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2010AnPhy.325.1479J/abstract)
- Jain et al. (2011). *Designing surveys for tests of gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2011RSPTA.369.5081J/abstract)
- Jana et al. (2018). *Constraints on f (R ) theories of gravity from GW170817*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d4056J/abstract)
- Jeakel et al. (2023). *Revisiting f(R , T) cosmologies*. [ADS](https://ui.adsabs.harvard.edu/abs/2024PDU....4301401J/abstract)
- Jeong et al. (2020). *Parity-odd galaxy bispectrum*. [ADS](https://ui.adsabs.harvard.edu/abs/2020PhRvD.102b3530J/abstract)
- Joudaki et al. (2020). *Testing gravity on cosmic scales: A case study of Jordan-Brans-Dicke theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PhRvD.105d3522J/abstract)
- Jovanović et al. (2016). *Recovering the fundamental plane of galaxies by f(R) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PDU....14...73J/abstract)
- Junior et al. (2024). *Constraints on the $\gamma$-parameter for the vacuum solution of Cotton gravity with geodesics and shadows*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240721655J/abstract)
- Junior et al. (2025). *Novel charged black hole solutions in conformal Killing gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250200589J/abstract)
- Jusufi et al. (2025). *Dark Universe inspired by the Kaluza-Klein gravity and impact on primordial gravitational waves*. [ADS](https://ui.adsabs.harvard.edu/abs/2025JHEAp..4700373J/abstract)
- Kahya et al. (2008). *A decisive test to confirm or rule out the existence of dark matter emulators using gravitational wave observations*. [ADS](https://ui.adsabs.harvard.edu/abs/2008CQGra..25r4008K/abstract)
- Kahya et al. (2010). *A useful guide for gravitational wave observers to test modified gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2011PhLB..701..291K/abstract)
- Kehagias et al. (2013). *Symmetries and consistency relations in the large scale structure of the universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2013NuPhB.873..514K/abstract)
- Khodabakhshi et al. (2021). *Gravitational lensing by black holes in Einstein quartic gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2021PhRvD.103b4017K/abstract)
- Khoury et al. (2009). *N-body simulations of DGP and degravitation theories*. [ADS](https://ui.adsabs.harvard.edu/abs/2009PhRvD..80f4023K/abstract)
- Khoury et al. (2014). *Alternative to particle dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2015PhRvD..91b4022K/abstract)
- Kimura et al. (2010). *Large scale structures in the kinetic gravity braiding model that can be unbraided*. [ADS](https://ui.adsabs.harvard.edu/abs/2011JCAP...04..025K/abstract)
- Kosowsky et al. (2009). *A future test of gravitation using galaxy cluster velocities*. [ADS](https://ui.adsabs.harvard.edu/abs/2009PhRvD..80f2003K/abstract)
- Kramer et al. (2004). *Strong-field tests of gravity using pulsars and black holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2004NewAR..48..993K/abstract)
- Kroupa et al. (2018). *A common Milgromian acceleration scale in nature*. [ADS](https://ui.adsabs.harvard.edu/abs/2018NatAs...2..925K/abstract)
- Kärcher et al. (2024). *Towards an optimal marked correlation function analysis for the detection of modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240602504K/abstract)
- Lake et al. (2006). *Galactic Halos are Einstein Clusters of WIMPs*. [ADS](https://ui.adsabs.harvard.edu/abs/2006gr.qc.....7057L/abstract)
- Laudato et al. (2021). *Multicomponent DHOST analysis in galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.1878L/abstract)
- Lazutkina et al. (2017). *Theoretical terms of contemporary cosmology as intellectual artifacts*. [ADS](https://ui.adsabs.harvard.edu/abs/2017arXiv170705235L/abstract)
- Lee et al. (2004). *Scalar-tensor gravity coupled to a global monopole and flat rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2004PhRvD..69l7502L/abstract)
- Li et al. (2020). *Galactic Rotation Curves in Conformal Scalar-Tensor Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2020GrCo...26...99L/abstract)
- Lin et al. (2018). *Phenomenology of modified gravity at recombination*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d3514L/abstract)
- Linder et al. (2018). *No slip gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2018JCAP...03..005L/abstract)
- Lindroos et al. (2015). *Wave propagation in modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhRvD..93d4050L/abstract)
- Liu et al. (2024). *Kerr-MOG-(A)dS black hole and its shadow in scalar-tensor-vector gravity theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2024JCAP...08..035L/abstract)
- Llinares et al. (2017). *Weighted density fields as improved probes of modified gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2017MNRAS.472L..80L/abstract)
- Lombriser et al. (2010). *Constraints on f(R) gravity from probing the large-scale structure*. [ADS](https://ui.adsabs.harvard.edu/abs/2012PhRvD..85l4038L/abstract)
- Lopez Armengol et al. (2017). *Neutron stars in Scalar-Tensor-Vector Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2017GReGr..49...27L/abstract)
- Luo et al. (2022). *Quantum Modified Gravity at Low Energy in the Ricci Flow of Quantum Spacetime*. [ADS](https://ui.adsabs.harvard.edu/abs/2023IJTP...62...91L/abstract)
- Magi et al. (2023). *Conditions for the absence of infrared sensitivity in cosmological probes in any gravity theories*. [ADS](https://ui.adsabs.harvard.edu/abs/2023PhLB..84638204M/abstract)
- Manfredi et al. (2018). *Quasinormal modes of modified gravity (MOG) black holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2018PhLB..779..492M/abstract)
- Mannheim et al. (2012). *Galactic rotation curves in conformal gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2013JPhCS.437a2002M/abstract)
- March et al. (2024). *Galactic Compton wavelengths in f(R) screening theories*. [ADS](https://ui.adsabs.harvard.edu/abs/2024JCAP...12..027M/abstract)
- Martino et al. (2008). *Spherical collapse and cluster counts in modified gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2009PhRvD..79h4013M/abstract)
- Martinovic et al. (2019). *Constraints on quasidilaton massive gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD.100l4016M/abstract)
- Mashhoon et al. (2004). *Gauge-dependent cosmological 'constant'*. [ADS](https://ui.adsabs.harvard.edu/abs/2004CQGra..21.3611M/abstract)
- Mashhoon et al. (2016). *Virial Theorem in Nonlocal Newtonian Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016Univ....2....9M/abstract)
- Mastache et al. (2012). *Testing modified gravity at large distances with the HI Nearby Galaxy Survey's rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PhRvD..87f3001M/abstract)
- Matsakos et al. (2016). *Dynamics of galaxies and clusters in \textit{refracted gravity}*. [ADS](https://ui.adsabs.harvard.edu/abs/2016arXiv160304943M/abstract)
- Mendonça et al. (2021). *Galaxy clusters, cosmic chronometers and the Einstein equivalence principle*. [ADS](https://ui.adsabs.harvard.edu/abs/2021JCAP...10..084M/abstract)
- Mezcua et al. (2021). *Black holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2021arXiv211008629M/abstract)
- Mijić et al. (1986). *The R<SUP>2</SUP> cosmology: Inflation without a phase transition*. [ADS](https://ui.adsabs.harvard.edu/abs/1986PhRvD..34.2934M/abstract)
- Mishra et al. (2011). *Fourth order gravity, scalar-tensor-vector gravity, and galaxy rotation curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PhRvD..88j4036M/abstract)
- Mishra et al. (2012). *Galaxy rotation curves from a fourth order gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2012arXiv1206.3322M/abstract)
- Mishra et al. (2012). *Modified Gravity as a Common Cause for Cosmic Acceleration and Flat Galaxy Rotation Curves*. [ADS](https://ui.adsabs.harvard.edu/abs/2012IJMPD..2142002M/abstract)
- Mo et al. (2024). *Testing Cotton gravity as dark matter substitute with weak lensing*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240507215M/abstract)
- Mo et al. (2025). *Testing Cotton gravity as dark matter substitute with weak lensing*. [ADS](https://ui.adsabs.harvard.edu/abs/2025SCPMA..6840412M/abstract)
- Modesto et al. (2021). *Geometric Origin of the Galaxies' Dark Side*. [ADS](https://ui.adsabs.harvard.edu/abs/2023Univ...10...19M/abstract)
- Moffat et al. (2006). *Scalar tensor vector gravity theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2006JCAP...03..004M/abstract)
- Moffat et al. (2007). *Fundamental parameter-free solutions in modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2009CQGra..26h5002M/abstract)
- Moffat et al. (2007). *Testing modified gravity with motion of satellites around galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2007arXiv0708.1264M/abstract)
- Moffat et al. (2007). *a Modified Gravity and its Consequences for the Solar System, Astrophysics and Cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/2007IJMPD..16.2075M/abstract)
- Moffat et al. (2008). *The bending of light and lensing in modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2009MNRAS.397.1885M/abstract)
- Moffat et al. (2010). *Observationally Verifiable Predictions of Modified Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2010AIPC.1241.1066M/abstract)
- Moffat et al. (2011). *Comment on "The Real Problem with MOND" by Scott Dodelson, arXiv:1112.1320*. [ADS](https://ui.adsabs.harvard.edu/abs/2011arXiv1112.4386M/abstract)
- Moffat et al. (2011). *Cosmological observations in a modified theory of gravity (MOG)*. [ADS](https://ui.adsabs.harvard.edu/abs/2011arXiv1104.2957M/abstract)
- Mohan et al. (2024). *Galactic dynamics in the presence of scalaron: a perspective from f(R) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2024PhyS...99i5025M/abstract)
- Momeni et al. (2025). *Dark Matter Constraints in Myrzakulov $F(R,T)$ Gravity: A Vielbein Approach in Weitzenböck Spacetime with Observational Data*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250721359M/abstract)
- Monjo et al. (2024). *Distinct radial acceleration relations of galaxies and galaxy clusters supports hyperconical modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240510019M/abstract)
- Moretti et al. (2024). *Breaking Parity: the case of the Trispectrum from Chiral Scalar-Tensor Theories of Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241011801M/abstract)
- Moretti et al. (2025). *Breaking parity: the case of the trispectrum from chiral scalar-tensor theories of gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2025JCAP...07..051M/abstract)
- Mukohyama et al. (2006). *An accelerating universe and cosmological perturbation in the ghost condensate*. [ADS](https://ui.adsabs.harvard.edu/abs/2006JCAP...10..011M/abstract)
- Mureika et al. (2016). *Black hole thermodynamics in MOdified Gravity (MOG)*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhLB..757..528M/abstract)
- Mustafa et al. (2022). *On the Possibility of Generalized Wormhole Formation in the Galactic Halo Due to Dark Matter Using the Observational Data within the Matter Coupling Gravity Formalism*. [ADS](https://ui.adsabs.harvard.edu/abs/2022ApJ...941..170M/abstract)
- Nash et al. (2023). *Modified general relativity and dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2023IJMPD..3250031N/abstract)
- Navarro et al. (2005). *Consistent long distance modification of gravity from inverse powers of the curvature*. [ADS](https://ui.adsabs.harvard.edu/abs/2006JCAP...03..008N/abstract)
- Navarro et al. (2005). *On the Newtonian limit of generalized modified gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2005PhLB..622....1N/abstract)
- Navia et al. (2019). *On the Generalized-Faber Jackson relation for NGC 1052 DF2 galaxy*. [ADS](https://ui.adsabs.harvard.edu/abs/2019arXiv190302479N/abstract)
- Nesseris et al. (2014). *Cosmological perturbations and observational constraints on nonlocal massive gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2014PhRvD..90b4070N/abstract)
- Nieuwenhuizen et al. (2017). *How Zwicky already ruled out modified gravity theories without dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ForPh..6500050N/abstract)
- Pal et al. (2005). *Can extra-dimensional effects replace dark matter? [rapid communication]*. [ADS](https://ui.adsabs.harvard.edu/abs/2005PhLB..609..194P/abstract)
- Pal et al. (2005). *An alternative to dark matter: do braneworld effects hold the key?*. [ADS](https://ui.adsabs.harvard.edu/abs/2005astro.ph.12494P/abstract)
- Pan et al. (2019). *Forecasted constraints on modified gravity from Sunyaev-Zel'dovich tomography*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD.100h3522P/abstract)
- Parbin et al. (2023). *Galactic rotation dynamics in a new <inline-formula id="IEq1"><mml:math><mml:mrow><mml:mi>f</mml:mi><mml:mo stretchy="false">(</mml:mo><mml:mi mathvariant="script">R</mml:mi><mml:mo stretchy="false">)</mml:mo></mml:mrow></mml:math></inline-formula> gravity model*. [ADS](https://ui.adsabs.harvard.edu/abs/2023EPJC...83..411P/abstract)
- Park et al. (2012). *Structure formation in a nonlocally modified gravity model*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PhRvD..87b4003P/abstract)
- Peacock et al. (1999). *Cosmological Physics*. [ADS](https://ui.adsabs.harvard.edu/abs/1999coph.book.....P/abstract)
- Peebles et al. (1999). *Noninteracting dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/1999PhRvD..60j3506P/abstract)
- Perivolaropoulos et al. (2019). *Reconstructing a model for gravity at large distances from dark matter density profiles*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD..99l4006P/abstract)
- Philcox et al. (2023). *Do the CMB Temperature Fluctuations Conserve Parity?*. [ADS](https://ui.adsabs.harvard.edu/abs/2023PhRvL.131r1001P/abstract)
- Pikhitsa et al. (2010). *MOND reveals the thermodynamics of gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2010arXiv1010.0318P/abstract)
- Pizzuti et al. (2024). *Testing Refracted Gravity with kinematics of galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241019698P/abstract)
- Platscher et al. (2018). *Long range effects in gravity theories with Vainshtein screening*. [ADS](https://ui.adsabs.harvard.edu/abs/2018JCAP...12..009P/abstract)
- Rana et al. (2018). *Bounds on graviton mass using weak lensing and SZ effect in galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2018PhLB..781..220R/abstract)
- Re et al. (2025). *Non zero Coriolis field in Ehlers' Frame Theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250408797R/abstract)
- Reinhard et al. (2024). *Full Parity-Violating Trispectrum in Axion Inflation: Reduction to Low-D Integrals*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241216037R/abstract)
- Reischke et al. (2018). *Investigating scalar-tensor gravity with statistics of the cosmic large-scale structure*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.482.3274R/abstract)
- Renk et al. (2016). *Gravity at the horizon: on relativistic effects, CMB-LSS correlations and ultra-large scales in Horndeski's theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2016JCAP...07..040R/abstract)
- Reuter et al. (2004). *Quantum gravity at astrophysical distances?*. [ADS](https://ui.adsabs.harvard.edu/abs/2004JCAP...12..001R/abstract)
- Reyes et al. (2010). *Confirmation of general relativity on large scales from weak lensing and galaxy velocities*. [ADS](https://ui.adsabs.harvard.edu/abs/2010Natur.464..256R/abstract)
- Rodrigues et al. (2012). *Disk and elliptical galaxies within renormalization group improved gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2012AIPC.1471...98R/abstract)
- Rodrigues et al. (2015). *The bending of light within gravity with large scale renormalization group effects*. [ADS](https://ui.adsabs.harvard.edu/abs/2015AIPC.1647...57R/abstract)
- Roshan et al. (2014). *Jeans analysis in modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2014PhRvD..90d4010R/abstract)
- Rostami et al. (2025). *Relativistic MOND Theory from Modified Entropic Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251105632R/abstract)
- Roukema et al. (2006). *A weak acceleration effect due to residual gravity in a multiply connected universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2007A&A...463..861R/abstract)
- Rowland et al. (2015). *On claims that general relativity differs from Newtonian physics for self-gravitating dusts in the low velocity, weak field limit*. [ADS](https://ui.adsabs.harvard.edu/abs/2015IJMPD..2450065R/abstract)
- Rusov et al. (2019). *Thermomagnetic Ettingshausen-Nernst effect in tachocline, magnetic reconnection phenomenon in lower layers, axion mechanism of solar luminosity variations, coronal heating problem solution and mechanism of ADM variations around BH*. [ADS](https://ui.adsabs.harvard.edu/abs/2019arXiv190806042R/abstract)
- Safonova et al. (1999). *Gravity Balls in Induced Gravity Model -- "Gravitational Lens" Effects*. [ADS](https://ui.adsabs.harvard.edu/abs/2000GrCo....6..327S/abstract)
- Sakstein et al. (2014). *Testing Gravity Theories Using Stars*. [ADS](https://ui.adsabs.harvard.edu/abs/2014arXiv1409.3708S/abstract)
- Sakstein et al. (2014). *Detecting modified gravity in the stars*. [ADS](https://ui.adsabs.harvard.edu/abs/2014IJMPD..2342002S/abstract)
- Sakstein et al. (2017). *Implications of the Neutron Star Merger GW170817 for Cosmological Scalar-Tensor Theories*. [ADS](https://ui.adsabs.harvard.edu/abs/2017PhRvL.119y1303S/abstract)
- Sakstein et al. (2017). *Tests of Gravity Theories Using Supermassive Black Holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ApJ...844L..14S/abstract)
- Salopek et al. (1995). *Hypersurface-invariant approach to cosmological perturbations*. [ADS](https://ui.adsabs.harvard.edu/abs/1995PhRvD..51..517S/abstract)
- Salzano et al. (2012). *Unifying static analysis of gravitational structures with a scale-dependent scalar field gravity as an alternative to dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2014A&A...561A.131S/abstract)
- Santa Vélez et al. (2020). *Constraining gravity theories with the gravitational stability mass*. [ADS](https://ui.adsabs.harvard.edu/abs/2020JCAP...06..022S/abstract)
- Schmidt et al. (2007). *Galaxy-CMB cross-correlation as a probe of alternative models of gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2007PhRvD..76h3518S/abstract)
- Sefiedgar et al. (2012). *Brane-f(R) gravity and dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2012PhRvD..85f4012S/abstract)
- Sellwood et al. (2000). *Does Dark Matter Exist?*. [ADS](https://ui.adsabs.harvard.edu/abs/2001ASPC..240..311S/abstract)
- Silk et al. (1999). *The Fundamental Parameters of Cosmology*. [ADS](https://ui.adsabs.harvard.edu/abs/1999PASP..111..258S/abstract)
- Simpson et al. (2013). *CFHTLenS: testing the laws of gravity with tomographic weak lensing and redshift-space distortions*. [ADS](https://ui.adsabs.harvard.edu/abs/2013MNRAS.429.2249S/abstract)
- Skordis et al. (2005). *Large Scale Structure in Bekenstein's Theory of Relativistic Modified Newtonian Dynamics*. [ADS](https://ui.adsabs.harvard.edu/abs/2006PhRvL..96a1301S/abstract)
- Song et al. (2008). *A step towards testing general relativity using weak gravitational lensing and redshift surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2009JCAP...03..025S/abstract)
- Sporea et al. (2018). *Galaxy rotation curves via conformal factors*. [ADS](https://ui.adsabs.harvard.edu/abs/2018EPJC...78..308S/abstract)
- Stabenau et al. (2006). *N-body simulations of alternative gravity models*. [ADS](https://ui.adsabs.harvard.edu/abs/2006PhRvD..74h4007S/abstract)
- Stabile et al. (2013). *Galaxy rotation curves in f(R,ϕ) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PhRvD..87f4002S/abstract)
- Stark et al. (2016). *Probing theories of gravity with phase space-inferred potentials of galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhRvD..93h4036S/abstract)
- Starobinsky et al. (2007). *Disappearing cosmological constant in f( R) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2007JETPL..86..157S/abstract)
- Stubbs et al. (1993). *Experimental limits on any long range nongravitational interaction between dark matter and ordinary matter*. [ADS](https://ui.adsabs.harvard.edu/abs/1993PhRvL..70..119S/abstract)
- Svidzinsky et al. (2009). *Vector theory of gravity in Minkowski space-time: flat Universe without black holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2009arXiv0904.3155S/abstract)
- Svidzinsky et al. (2015). *Vector theory of gravity: Universe without black holes and solution of dark energy problem*. [ADS](https://ui.adsabs.harvard.edu/abs/2015arXiv151107058S/abstract)
- Tamosiunas et al. (2019). *Testing emergent gravity on galaxy cluster scales*. [ADS](https://ui.adsabs.harvard.edu/abs/2019JCAP...05..053T/abstract)
- Tasseten et al. (2015). *Gravitomagnetism in massive gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhRvD..93d4068T/abstract)
- Tegmark et al. (2001). *Measuring the metric: A parametrized post-Friedmannian approach to the cosmic dark energy problem*. [ADS](https://ui.adsabs.harvard.edu/abs/2002PhRvD..66j3507T/abstract)
- Thomas et al. (2011). *Viability of the cluster mass function formalism in parametrised modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2011arXiv1112.6378T/abstract)
- Tsujikawa et al. (2007). *Observational signatures of f(R) dark energy models that satisfy cosmological and local gravity constraints*. [ADS](https://ui.adsabs.harvard.edu/abs/2008PhRvD..77b3507T/abstract)
- Upadhye et al. (2013). *Monopole radiation in modified gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2013arXiv1306.6113U/abstract)
- Uruena Palomo et al. (2024). *MOND as a Transformation Between Non-inertial Reference Frames Via Sciama's Interpretation of Mach's Principle*. [ADS](https://ui.adsabs.harvard.edu/abs/2024IJTP...63..271U/abstract)
- Usman et al. (2016). *On the dark matter as a geometric effect in f (R) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016GReGr..48..147U/abstract)
- Vagnozzi et al. (2017). *Recovering a MOND-like acceleration law in mimetic gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2017CQGra..34r5006V/abstract)
- Valageas et al. (2013). *Angular-averaged consistency relations of large-scale structures*. [ADS](https://ui.adsabs.harvard.edu/abs/2014PhRvD..89l3522V/abstract)
- van Putten et al. (2016). *New estimates of the deceleration parameter in weak gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016arXiv161105692V/abstract)
- van Putten et al. (2017). *Anomalous Galactic Dynamics by Collusion of Rindler and Cosmological Horizons*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ApJ...837...22V/abstract)
- van Putten et al. (2017). *Galaxy rotation curves and the deceleration parameter in weak gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2017MPLA...3230019V/abstract)
- van Putten et al. (2024). *Galaxy dynamics tracing quantum cosmology beyond ΛCDM below the de Sitter scale of acceleration*. [ADS](https://ui.adsabs.harvard.edu/abs/2024ChJPh..91..377V/abstract)
- Varieschi et al. (2020). *Newtonian fractional-dimension gravity and disk galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2021EPJP..136..183V/abstract)
- Varieschi et al. (2020). *Newtonian fractional-dimension gravity and rotationally supported galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2021MNRAS.503.1915V/abstract)
- Varieschi et al. (2022). *Newtonian fractional-dimension gravity and the external field effect*. [ADS](https://ui.adsabs.harvard.edu/abs/2022EPJP..137.1217V/abstract)
- Visser et al. (1997). *Energy conditions in the epoch of galaxy formation.*. [ADS](https://ui.adsabs.harvard.edu/abs/1997Sci...276...88V/abstract)
- Wang et al. (2008). *Differentiating dark energy and modified gravity with galaxy redshift surveys*. [ADS](https://ui.adsabs.harvard.edu/abs/2008JCAP...05..021W/abstract)
- Wang et al. (2010). *Topology of a Large-scale Structure as a Test of Modified Gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2012ApJ...747...48W/abstract)
- Wang et al. (2017). *Cosmic quantum optical probing of quantum gravity through a gravitational lensLens*. [ADS](https://ui.adsabs.harvard.edu/abs/2017arXiv170301272W/abstract)
- Wegner et al. (2011). *Cosmology: Gravity tested on large scales*. [ADS](https://ui.adsabs.harvard.edu/abs/2011Natur.477..541W/abstract)
- Wen et al. (2024). *A cosmic glitch in gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2024JCAP...03..045W/abstract)
- Wright et al. (1990). *Universal gravity - Was Newton right?*. [ADS](https://ui.adsabs.harvard.edu/abs/1990PASA....8..334W/abstract)
- Xu et al. (2014). *Testing the tensor-vector-scalar theory with the latest cosmological observations*. [ADS](https://ui.adsabs.harvard.edu/abs/2015PhRvD..92h3505X/abstract)
- Xu et al. (2017). *A new test of f(R) gravity with the cosmological standard rulers in radio quasars*. [ADS](https://ui.adsabs.harvard.edu/abs/2018JCAP...06..042X/abstract)
- Xu et al. (2023). *Bumblebee Black Holes in Light of Event Horizon Telescope Observations*. [ADS](https://ui.adsabs.harvard.edu/abs/2023ApJ...945..148X/abstract)
- Yamauchi et al. (2021). *Second-order peculiar velocity field as a novel probe of scalar-tensor theories*. [ADS](https://ui.adsabs.harvard.edu/abs/2022PhRvD.105f3515Y/abstract)
- Yang et al. (2011). *Gravitational waves in viable f(R) models*. [ADS](https://ui.adsabs.harvard.edu/abs/2011JCAP...08..029Y/abstract)
- Yi et al. (2015). *PPN parameters in gravitational theory with nonminimally derivative coupling*. [ADS](https://ui.adsabs.harvard.edu/abs/2017IJMPD..2650005Y/abstract)
- Yoo et al. (2014). *Relativistic effect in galaxy clustering*. [ADS](https://ui.adsabs.harvard.edu/abs/2014CQGra..31w4001Y/abstract)
- Yoon et al. (2013). *Problems with Mannheim's conformal gravity program*. [ADS](https://ui.adsabs.harvard.edu/abs/2013PhRvD..88b7504Y/abstract)
- Yunes et al. (2010). *Testing gravitational parity violation with coincident gravitational waves and short gamma-ray bursts*. [ADS](https://ui.adsabs.harvard.edu/abs/2010PhRvD..82f4017Y/abstract)
- Zaregonbadi et al. (2016). *Dark matter from f (R ,T ) gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2016PhRvD..94h4052Z/abstract)
- Zaregonbadi et al. (2025). *Chameleon gravity as an alternative to dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2025EPJC...85..781Z/abstract)
- Zeng et al. (2017). *$d_{\ell}(z)$ and BAO in the emergent gravity and the dark universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2017arXiv170100690Z/abstract)
- Zhang et al. (2007). *Behavior of f(R) gravity in the solar system, galaxies, and clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2007PhRvD..76b4007Z/abstract)
- Zhang et al. (2024). *Rotating galactic black holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240319933Z/abstract)
- Zhao et al. (2005). *A review on success and problem of MOND on globular cluster scale*. [ADS](https://ui.adsabs.harvard.edu/abs/2005astro.ph..8635Z/abstract)
- Zhao et al. (2006). *An introduction to Gravitational Lensing in TeVeS gravity*. [ADS](https://ui.adsabs.harvard.edu/abs/2006astro.ph.11777Z/abstract)
- Zhao et al. (2008). *An Uneven Vacuum Energy Fluid as Λ, Dark Matter, MOND and Lens*. [ADS](https://ui.adsabs.harvard.edu/abs/2008MPLA...23..555Z/abstract)
- Zhao et al. (2008). *Reinterpreting MOND: coupling of Einsteinian gravity and spin of cosmic neutrinos?*. [ADS](https://ui.adsabs.harvard.edu/abs/2008arXiv0805.4046Z/abstract)
- Zhao et al. (2012). *Unifying all mass discrepancies with one effective gravity law?*. [ADS](https://ui.adsabs.harvard.edu/abs/2012PhRvD..86f7301Z/abstract)
- Zhao et al. (2025). *Constraining gravity with the decay rate of cosmological gravitational potential*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251104279Z/abstract)
- Zheng et al. (2025). *One-loop kernels in scale-dependent Horndeski theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250516767Z/abstract)
- Zloshchastiev et al. (2020). *An Alternative to Dark Matter and Dark Energy: Scale-Dependent Gravity in Superfluid Vacuum Theory*. [ADS](https://ui.adsabs.harvard.edu/abs/2020Univ....6..180Z/abstract)

<!-- Generated by Lodestone | iterations: 3 | converged: False | coverage: 0.625 | date: 2026-03-04T21:16:44Z -->
