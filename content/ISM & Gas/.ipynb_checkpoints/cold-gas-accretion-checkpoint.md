---
title: "Cold gas accretion"
description: "Cold gas accretion refers to the inflow of low-temperature gas (~10⁴ K) from the intergalactic medium into galaxies along narrow cosmic filaments, bypassing shock-heating at the virial radius. This mechanism provides the primary fuel source for sustained star formation and the growth of baryonic disks, particularly in high-redshift galaxies and low-mass systems."
tags:
  - "Star formation"
  - "High-redshift galaxies"
  - "Intergalactic medium"
date: "2026-03-04"
draft: false
---

**Cold gas accretion** is a fundamental mechanism of [[cosmic-accretion|Cosmic accretion]] in which low-temperature gas ($T \sim 10^4$ K) from the cosmic web flows directly into a galaxy along narrow filaments, bypassing the stable accretion shock at the dark matter halo's virial radius. This process fundamentally contrasts with the classical [[hot-mode-accretion|Hot Mode Accretion]] paradigm, where infalling gas is universally shock-heated to the halo's virial temperature to form a pressure-supported [[hot-circumgalactic-medium|Hot circumgalactic medium]] before slowly undergoing [[radiative-cooling|Radiative cooling]] [Silk et al. (1977)](https://ui.adsabs.harvard.edu/abs/1977ApJ...211..638S/abstract). The dichotomy between these two [[gas-accretion-modes|Gas accretion modes]] is dictated by the ratio of the [[gas-cooling-timescales|Gas cooling timescales]] to the local dynamical free-fall time. In halos below a critical [[transition-halo-mass-scale|Transition Halo Mass Scale]] of roughly $M \sim 10^{11.5} - 10^{12} M_\odot$, cooling is highly efficient; the gas loses thermal pressure support too rapidly to maintain a stable virial shock, allowing cold streams to penetrate deep into the central galaxy [Kereš et al. (2004)](https://ui.adsabs.harvard.edu/abs/2005MNRAS.363....2K/abstract), [Benson et al. (2011)](https://ui.adsabs.harvard.edu/abs/2011MNRAS.410.2653B/abstract). 

Recognized as the primary driver of the cosmic star formation history at high redshifts ($z > 2$), cold accretion efficiently delivers massive [[cold-gas-reservoirs|Cold gas reservoirs]] to forming galaxies. Because these filamentary streams are subjected to large-scale cosmic web torques, they carry significantly higher specific angular momentum than the host dark matter halo, directly fueling the extended formation of rotationally supported galactic disks [Katz et al. (2002)](https://ui.adsabs.harvard.edu/abs/2003ASSL..281..185K/abstract). While pristine cold streams dominate low-mass and early-universe assembly, a distinct but related phenomenon known as [[chaotic-cold-accretion|Chaotic cold accretion]] occurs in more massive systems and [[cool-core-clusters|Cool core clusters]]. In this high-mass regime, where the hot mode otherwise dominates, localized thermal instabilities cause clumps of [[cold-gas|Cold gas]] to precipitate out of the hot atmosphere, raining down to efficiently fuel [[active-galactic-nuclei-agn-physics|Active Galactic Nuclei (AGN) Physics]] and trigger self-regulating [[galactic-outflows-and-feedback|Galactic Outflows and Feedback]].

The hydrodynamic evolution of cold streams as they traverse the [[hot-circumgalactic-medium|Hot circumgalactic medium]] is highly complex and remains an active area of research. As they interact with the ambient hot gas, infalling streams are subjected to Kelvin-Helmholtz instabilities and may "shatter" into a finely structured [[multiphase-circumgalactic-medium|Multiphase circumgalactic medium]], or dynamically entrain hot gas to amplify the overall accretion rate. Despite strong theoretical foundations, directly observing unshocked cold accretion in emission remains difficult, though indirect signatures are robustly detected in metal-poor absorption systems, extended Lyman-alpha blobs, and inverse metallicity gradients in high-redshift disks. Resolving the precise microphysics of stream survival, mapping the contribution of "invisible" highly ionized gas to [[galaxy-gas-replenishment|Galaxy gas replenishment]] in the local universe, and determining whether the shattering of cold streams acts as a primary mechanism for galaxy quenching represent major open questions. Next-generation facilities like the Square Kilometre Array (SKA) and future X-ray observatories are poised to map these faint cosmic flows and definitively trace the multiscale physics of galactic fueling.

## Historical Development and Theoretical Origins

In the foundational framework of galaxy formation developed in the late 1970s, it was generally assumed that all infalling gas is universally shock-heated to the [[mean-galactic-virial-temperature|Mean galactic virial temperature]] of the dark matter halo, $T_{\rm vir}$ (e.g., [Silk et al. (1977)](https://ui.adsabs.harvard.edu/abs/1977ApJ...211..638S/abstract), White & Rees 1978). In this standard [[hot-mode-accretion|Hot Mode Accretion]] model, the gas establishes hydrostatic equilibrium and subsequently undergoes [[radiative-cooling|Radiative cooling]] to settle into a rotationally supported disk. This quasi-spherical, shock-heated accretion model formed the basis of early theoretical and semi-analytic models. The mathematical foundation for understanding these limits emerged early on through works such as Chevalier's (1988) self-similar solutions for accretion, which first defined the critical radii and masses for [[post-shock-cooling|Post-shock cooling]] and cooling [Chevalier et al. (1988)](https://ui.adsabs.harvard.edu/abs/1988ApJ...329...16C/abstract). However, the hot mode framework historically struggled to match observations, often running into an "overcooling problem" where excessive cooling at high redshifts overpredicted the stellar mass density of the universe, and creating a "cooling flow paradox" where massive central mass deposition was predicted but not observed.

Early alternative models also suggested external gas delivery mechanisms; for instance, Silk (1979) proposed the accretion of gas-rich dwarfs as a source of H I in early-type galaxies—a process often categorized under [[gas-rich-galaxy-interactions|Gas-rich galaxy interactions]] [Silk et al. (1979)](https://ui.adsabs.harvard.edu/abs/1979ApJ...234...86S/abstract), while later theoretical models explored the ram-pressure capture of [[extra-planar-and-circumgalactic-gas|Extra-planar and Circumgalactic Gas]] as a mechanism for AGN fueling and triggering starbursts [Sofue et al. (1993)](https://ui.adsabs.harvard.edu/abs/1993A&A...273...79S/abstract). The theoretical necessity of a ubiquitous accretion shock was eventually challenged by analytical and one-dimensional hydrodynamic studies of shock stability. The [[birnboim-dekel-quenching|Birnboim-Dekel quenching]] model demonstrated that a stable accretion shock can only exist if the post-shock gas can maintain pressure support against gravitational compression [Benson et al. (2011)](https://ui.adsabs.harvard.edu/abs/2011MNRAS.410.2653B/abstract). If the [[gas-cooling-timescales|Gas cooling timescales]] are shorter than the dynamical free-fall time ($t_{\rm cool} < t_{\rm ff}$), the gas cools rapidly, losing pressure support and collapsing toward the halo center without ever establishing hydrostatic equilibrium. This shock stability criterion yields a critical [[transition-halo-mass-scale|Transition Halo Mass Scale]], $M_{\rm crit} \sim 10^{11.5}$-$10^{12} M_\odot$. Below $M_{\rm crit}$, the accretion shock is unstable, and gas accretes via a "cold mode" at temperatures $T \lesssim 10^5$ K, remaining well below the halo's virial temperature. Above $M_{\rm crit}$, a stable virial shock forms, leading to conventional hot mode accretion.

The analytical predictions of the Birnboim-Dekel model were decisively confirmed and expanded upon by high-resolution 3D cosmological numerical simulations in the early 2000s. Early indications of unshocked [[cold-gas|Cold gas]] accretion [Katz et al. (2002)](https://ui.adsabs.harvard.edu/abs/2003ASSL..281..185K/abstract) culminated in the landmark study by Kereš et al. 2005 [Kereš et al. (2004)](https://ui.adsabs.harvard.edu/abs/2005MNRAS.363....2K/abstract), which demonstrated that [[galaxy-accretion|Galaxy accretion]] is fundamentally bimodal. Their smoothed particle hydrodynamics (SPH) simulations revealed that cold mode accretion dominates the growth of low-mass galaxies ($M_{\rm halo} < 10^{11.4} M_\odot$) and is the primary driver of star formation at high redshifts ($z > 2$). Furthermore, unlike quasi-spherical hot accretion, this cold gas is highly anisotropic; it is channeled along the dense, filamentary structures of the cosmic web, penetrating deep into the inner halo. 

This discovery prompted a major paradigm shift in astrophysics. Rather than relying on the slow radiative cooling of a hot, static corona, simulations showed that much of the gas fueling the [[cosmic-accretion|Cosmic accretion]] history never passes through a hot phase. Subsequent studies using various numerical codes confirmed this bimodal framework [Ocvirk et al. (2008)](https://ui.adsabs.harvard.edu/abs/2008MNRAS.390.1326O/abstract), [Kereš et al. (2009)](https://ui.adsabs.harvard.edu/abs/2009MNRAS.395..160K/abstract), establishing that cold filamentary flows provide a direct and highly efficient mechanism for delivering both mass and high specific angular momentum to the inner regions of forming galaxies.

## The Bimodal Accretion Paradigm and Transition Mass

The physical divergence between hot and cold mode accretion is fundamentally governed by the competition between two timescales: the [[gas-cooling-timescales|Gas cooling timescales]], $t_{\rm cool}$, and the free-fall time, $t_{\rm ff}$, of the dark matter halo. When $t_{\rm cool} > t_{\rm ff}$, the post-shock gas cools slowly enough to maintain thermal pressure support, establishing a quasi-static, hot atmosphere in hydrostatic equilibrium. Conversely, when $t_{\rm cool} < t_{\rm ff}$, [[radiative-cooling|Radiative cooling]] is highly efficient. In this regime, the gas radiates away its gravitational binding energy rapidly, losing pressure support and collapsing toward the halo center on a free-fall time without forming a stable accretion shock [Benson et al. (2011)](https://ui.adsabs.harvard.edu/abs/2011MNRAS.410.2653B/abstract).

Because $t_{\rm cool}$ is strongly dependent on the gas density and the [[mean-galactic-virial-temperature|Mean galactic virial temperature]], while $t_{\rm ff}$ is a function of the halo's mean density, this timescale condition naturally defines a transition halo mass, often denoted $M_{\rm shock}$ or $M_{\rm crit}$, which dictates the [[transition-halo-mass-scale|Transition Halo Mass Scale]]. Analytic models and hydrodynamic simulations consistently place this transition halo mass in the range of $10^{11.4} - 10^{12} M_\odot$ [Kereš et al. (2004)](https://ui.adsabs.harvard.edu/abs/2005MNRAS.363....2K/abstract), [Ocvirk et al. (2008)](https://ui.adsabs.harvard.edu/abs/2008MNRAS.390.1326O/abstract). In halos with masses below $M_{\rm shock}$, cold-mode accretion completely dominates the baryonic growth of the galaxy. For halos above this threshold, a stable accretion shock can be sustained. Once shock-heated, [[hot-mode-accretion|Hot Mode Accretion]] becomes the dominant mechanism for heating the [[hot-circumgalactic-medium|Hot circumgalactic medium]]. This framework creates a nuanced dichotomy across environments, where massive clusters frequently host central cold-mode accretion due to rapid localized cooling, while group-scale halos can maintain long-term hot-mode accretion because of effective [[gravitational-heating|Gravitational heating]].

Despite the classical mass threshold, the prevalence of the two modes is strongly dependent on redshift. At high redshifts ($z > 2$), during the universe's peak star-forming epoch (often called "Cosmic Noon"), the higher mean density of the universe and the geometry of the cosmic web allow narrow, dense streams of cold gas to penetrate even massive halos ($M > 10^{12} M_\odot$) whose bulk volume is otherwise filled with shock-heated gas. Observational surveys confirm that gas accretion is indeed the dominant method for star formation and stellar mass assembly in massive galaxies at $z = 1.5-3$. These cold streams efficiently deliver star-forming fuel to the central galaxy, replenishing massive [[cold-gas-reservoirs|Cold gas reservoirs]] required to sustain extreme star formation rates ($\gtrsim 100\, M_\odot\, \mathrm{yr}^{-1}$) [Kereš et al. (2008)](https://ui.adsabs.harvard.edu/abs/2009MNRAS.395..160K/abstract), [van de Voort et al. (2010)](https://ui.adsabs.harvard.edu/abs/2011MNRAS.414.2458V/abstract). The rapid influx of material results in [[high-density-gas|High-density gas]] surface densities that render these early disks marginally stable, frequently triggering [[violent-disk-instability|Violent disk instability]] that drives further structural evolution and bulge formation [Goerdt et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012MNRAS.424.2292G/abstract). 

At late times ($z < 1$), the typical cross-section of cosmic filaments begins to exceed that of the galaxies at their intersections, causing cold accretion rates to decline. Consequently, hot mode accretion becomes relatively more important in the late universe, particularly in group and cluster environments [Katz et al. (2002)](https://ui.adsabs.harvard.edu/abs/2003ASSL..281..185K/abstract). Furthermore, the exact value of the transition mass is sensitive to the metallicity of the intergalactic medium; metal-line cooling enhances the overall cooling efficiency of the gas, thereby altering the transition boundary and allowing cold streams to persist in slightly more massive halos.

## Angular Momentum and Disk Formation

Classical models of [[galaxy-accretion|Galaxy accretion]] generally assumed that infalling baryons and dark matter acquire identical angular momentum distributions during linear structure formation. In this paradigm, if angular momentum is conserved during [[radiative-cooling|Radiative cooling]], the gas spins up as it flows inward, eventually settling into centrifugal equilibrium to form a rotationally supported disk. However, early hydrodynamical simulations based on this assumption frequently suffered from the "angular momentum catastrophe," wherein gas lost too much angular momentum to the dark matter halo, producing galactic disks that were far too compact. 

The recognition of cold mode accretion has provided a natural resolution to this problem. Because [[cold-gas|Cold gas]] accretes anisotropically along cosmic filaments rather than through a quasi-spherical hot halo, it retains a distinct kinematic profile. Cosmological simulations reveal that cold-mode accreted gas enters the halo with approximately $70\%$ more specific angular momentum than the host dark matter halo [Stewart et al. (2013)](https://ui.adsabs.harvard.edu/abs/2013ApJ...769...74S/abstract). 

The acquisition and alignment of this angular momentum are governed primarily by gravitational torques. In the cold phase at $z > 2$, coherent gravitational torques from the cosmic web and dark matter halo dominate over hydrodynamical pressure torques, driving the spin-down and spatial realignment of the inflowing gas. Because this cold gas bypasses the virial shock, it sinks rapidly toward the central galaxy, preserving its high specific angular momentum to form extended, gaseous "cold flow disks" [Stewart et al. (2013)](https://ui.adsabs.harvard.edu/abs/2013ApJ...769...74S/abstract). Detailed kinematic studies indicate that this infalling gas accretes onto discs with rotation velocities lower than local circular speeds, a kinematic lag that induces radial inflows.

While there is strong consensus that gas streams supply the requisite mass and angular momentum to build extended reservoirs, the immediate dynamical impact of these streams on the disk is actively debated. While some models propose that the kinetic energy of the streams directly fuels internal disk velocity dispersions, other simulations find that the accretion energy is efficiently dissipated at the disk-halo interface. In the latter scenario, cold streams have a weak instantaneous dynamical effect on the disk, and internal turbulence is instead driven predominantly by [[galactic-outflows-and-feedback|Galactic Outflows and Feedback]].

## Instabilities and Interaction with the CGM

As cold, filamentary gas streams ($T \sim 10^4$ K) penetrate the shock-heated [[hot-gas|Hot gas]] of a galaxy's halo, the velocity shear at the stream-halo interface inevitably triggers hydrodynamical instabilities, most notably the Kelvin-Helmholtz instability (KHI) [Vossberg et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.2130V/abstract). The hydrodynamical evolution of these streams is dictated by a competition between the disruptive forces of KHI and stabilizing microphysical processes.

In a purely adiabatic regime, KHI would rapidly strip and dissolve the cold streams into the ambient halo. However, high-resolution models demonstrate that [[radiative-cooling|Radiative cooling]], self-gravity, and magnetohydrodynamic (MHD) effects act to stabilize the streams, allowing them to survive their transit to the central galaxy [Wang et al. (2014)](https://ui.adsabs.harvard.edu/abs/2014MNRAS.439L..85W/abstract). When the local cooling time is comparable to the dynamical time, the stream's thermodynamic evolution becomes highly complex. If the gas clouds lose sonic contact, they can undergo "shattering"—a process where the gas rapidly implodes and fragments into tiny cloudlets. This fragmentation produces a highly turbulent, [[multiphase-circumgalactic-medium|Multiphase circumgalactic medium]] consisting of cold clumps embedded in the hot post-shock gas [Cornuault et al. (2016)](https://ui.adsabs.harvard.edu/abs/2016arXiv160904405C/abstract). 

Rather than solely depleting the cold gas, the turbulent mixing layers at the stream boundaries can actually facilitate mass growth. As the [[hot-circumgalactic-medium|Hot circumgalactic medium]] interacts with the stream, the entrained hot gas cools in the intermediate-temperature mixing layer and condenses onto the cold phase. Combined with acceleration down the dark matter potential well, this entrainment process can triple the inward cold mass flow rate by the time the stream reaches the central galaxy [Aung et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.2965A/abstract). The resulting boost in gas supply is frequently invoked to explain the excessive star-formation rates observed in massive galaxies at cosmic noon ($z \sim 2-3$).

On macroscopic scales, the continuous injection of cold streams drives large-scale turbulence in the halo, yielding a skewed log-normal gas density distribution characterized by a high-density tail. In the most massive systems, such as galaxy clusters, the collision of inflowing cold streams with the dense intracluster medium provides an ongoing mechanism for the formation of accretion shocks and [[cold-fronts-astrophysics|Cold fronts (astrophysics)]] deep within the cluster core [Nagai et al. (2002)](https://ui.adsabs.harvard.edu/abs/2003ApJ...587..514N/abstract).

## Chaotic Cold Accretion (CCA) and SMBH Feeding

Traditionally, the feeding of supermassive black holes in massive elliptical galaxies and [[cool-core-clusters|Cool core clusters]] was modeled as a smooth, spherical inflow of highly virialized [[hot-gas|Hot gas]], often approximated by Bondi accretion. However, multi-wavelength observations and high-resolution hydrodynamic simulations have driven a paradigm shift toward Chaotic Cold Accretion (CCA) as a dominant feeding mechanism in many systems hosting [[active-galactic-nuclei-agn-physics|Active Galactic Nuclei (AGN) Physics]] [Tremblay et al. (2016)](https://ui.adsabs.harvard.edu/abs/2016Natur.534..218T/abstract). In the CCA framework, [[radiative-cooling|Radiative cooling]] within the hot atmospheric halo triggers thermal instabilities, causing cold, dense clumps to precipitate out of the ambient medium and "rain" down onto the galactic center.

The onset of this precipitation is governed by the local thermodynamic state of the gas. When the ratio of the cooling time to the gravitational free-fall time drops near a critical predicted threshold for instability, the hot plasma loses pressure support and becomes strongly susceptible to multiphase condensation [Voit et al. (2015)](https://ui.adsabs.harvard.edu/abs/2015Natur.519..203V/abstract). As this gas rapidly cools, it shatters into an extended network of [[cold-gas|Cold gas]] filaments and molecular clouds.

Crucially, CCA efficiently overcomes the angular momentum barrier that typically stifles accretion in standard [[radiatively-inefficient-accretion-flow|Radiatively inefficient accretion flow]] models. In a turbulent galactic atmosphere, local gas condenses with a broad distribution of angular momenta. As these discrete cold structures fall toward the black hole, they undergo inelastic, chaotic collisions that efficiently cancel out their net angular momentum, allowing the gas to plummet toward the inner accretion zone.

CCA operates as the fueling engine within a broader, self-regulating [[galactic-fountains|Galactic fountains]] feedback cycle. Once the precipitated cold clouds feed the black hole, the ensuing AGN feedback injects energy back into the surrounding environment via mechanical jets. These jets inflate buoyant X-ray cavities that uplift [[low-entropy-gas|Low-entropy gas]], multiphase gas from the core into the extended halo. As this uplifted gas expands and cools, it stimulates further thermal instability and triggers a new cycle of cold precipitation. 

## Feedback Regulation and Quenching

Without feedback mechanisms, cosmological models of galaxy formation systematically over-predict the cosmic star formation rate. This discrepancy necessitates energetic [[galactic-outflows-and-feedback|Galactic Outflows and Feedback]] to regulate and ultimately terminate cold gas accretion, thereby quenching star formation.

In low- and intermediate-mass halos, stellar feedback from supernovae and stellar winds is the primary regulator. This feedback drives [[galaxy-outflows|Galaxy outflows]] that expel cold gas from the interstellar medium. Additionally, these outflows provide "preventative feedback" by heating the [[hot-circumgalactic-medium|Hot circumgalactic medium]] and physically disrupting the coherence of infalling cold streams. In massive galaxies, groups, and cluster cores, where halos are dominated by shock-heated gas, [[active-galactic-nuclei-agn-physics|Active Galactic Nuclei (AGN) Physics]] becomes the dominant quenching mechanism. 

Although hot-mode accretion prevails in these massive systems, localized [[radiative-cooling|Radiative cooling]] can cause cold gas to precipitate out of the hot atmosphere via thermal instabilities. This precipitation rains down onto the central supermassive black hole in a stochastic, clumpy flow known as [[chaotic-cold-accretion|Chaotic cold accretion]] (CCA) [Tremblay et al. (2016)](https://ui.adsabs.harvard.edu/abs/2016Natur.534..218T/abstract). This rapid fueling triggers powerful AGN jets that inject mechanical energy into the surrounding halo, reheating the gas, offsetting further cooling, and stabilizing the cluster core [Voit et al. (2015)](https://ui.adsabs.harvard.edu/abs/2015Natur.519..203V/abstract). 

However, tensions remain regarding the exact balance of cold accretion and feedback. The current consensus indicates that while cold streams and CCA can persist in massive systems to provide essential fuel for the central black hole, the resulting feedback ultimately dominates the baryon cycle, maintaining the galaxy in a quenched state.

## Observational Signatures: Absorption and Emission

Direct detection of cold streams is observationally challenging because the unshocked [[cold-gas|Cold gas]] is diffuse and lacks bright internal stellar sources. Consequently, the most robust observational constraints come from [[extra-planar-and-circumgalactic-gas|Extra-planar and Circumgalactic Gas]] quasar absorption lines probing the [[multiphase-circumgalactic-medium|Multiphase circumgalactic medium]] (CGM) of foreground galaxies.

**Absorption Signatures in the CGM**
Cosmological simulations predict that cold accretion manifests as high-column density neutral hydrogen absorbers. Much of the gas accreting onto galaxies at high redshift never exceeds temperatures of $10^{5.5}\rm\,K$ and is observable as Lyman limit systems and damped Lyman-alpha systems. Because these streams deliver gas directly from the cosmic web, a definitive signature of cold accretion is the presence of kinematically distinct, metal-poor gas. Observations have revealed [[optically-thick-gas|Optically thick gas]] H I absorbers with extremely low metallicities often exhibiting line-of-sight kinematics consistent with inspiraling [[galactic-gas-inflow-and-infall|Galactic Gas Inflow and Infall]] toward the central galaxy [Bouché et al. (2013)](https://ui.adsabs.harvard.edu/abs/2013Sci...341...50B/abstract). 

While absorption line studies strongly support cold accretion at high redshift ($z > 2$), the observational picture in the local universe presents a significant tension. Extensive 21-cm surveys find that the direct accretion rate of neutral H I clouds onto nearby spiral galaxies is strictly constrained to be much lower than typical star formation rates. This indicates that if local galaxies are sustained by cosmological accretion, the infalling gas must either be predominantly highly ionized or delivered via highly episodic events.

**Emission Signatures: Lyman-alpha Blobs and Protodisks**
In emission, the primary tracers of cold flows are spatially extended Lyman-alpha blobs (LABs). Theoretical models predict that as cold streams penetrate the dark matter halo, they can radiate $\gtrsim 20\%$ of their gravitational binding energy via [[radiative-cooling|Radiative cooling]] without ever shock-heating to the virial temperature. This cooling radiation producing extended, luminous Ly$\alpha$ emission matching the morphology and linewidths of observed LABs [Dijkstra et al. (2009)](https://ui.adsabs.harvard.edu/abs/2009MNRAS.400.1109D/abstract). Recent integral field spectroscopy has allowed for the direct kinematic mapping of these emission features, detecting multi-filamentary inspiralling flows and giant rotating "protodisks" of cold gas.

**Chemical Gradients in the Galactic Disk**
Finally, the deposition of pristine gas directly into the central regions of high-redshift galaxies creates an observable chemical signature. Observations have revealed "inverse" metallicity gradients, where active central regions exhibit lower metallicities than the outskirts, interpreted as the rapid dilution of the interstellar medium by primordial gas from cold accretion streams [Cresci et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010Natur.467..811C/abstract).

## Open Questions and Future Directions

While simulations robustly predict that cold [[gas-accretion-modes|Gas accretion modes]] dominate high-redshift galaxy assembly, identifying direct signatures of cold accretion in the local universe remains an ongoing challenge. A central tension in current theoretical models is the discrepancy between the observed [[cold-gas|Cold gas]] accretion rates and the continuous fuel required to sustain local star formation. For example, surveys revealed that the average H I mass currently accreting onto nearby spiral galaxies provides an inflow rate merely an order of magnitude lower than typical star formation rates, indicating that either the required [[galactic-gas-inflow-and-infall|Galactic Gas Inflow and Infall]] is episodic, or the gas exists in currently unobservable phases.

High-velocity clouds represent a localized form of cold accretion, raining down from the [[halo-accretion|Halo accretion]] regions onto the galactic disk. A promising resolution to the star-formation fuel deficit lies in ionized accretion, as recent simulations suggest that neutral clouds are surrounded by extensive ionized envelopes. Tracking chemical signatures is also crucial for linking gas inflows to the broader missing baryons problem; a significant fraction of cosmic baryons may reside in the elusive [[warm-hot-intergalactic-medium|Warm-Hot Intergalactic Medium]] or within highly ionized, low-density flows.

Advancing our understanding of these phenomena requires next-generation observational facilities. The Square Kilometre Array (SKA) is poised to break current sensitivity barriers for mapping neutral hydrogen. Concurrently, future X-ray missions aim to directly untangle the multiscale interactions between cold streams and [[galactic-outflows-and-feedback|Galactic Outflows and Feedback]] such as winds, radiation, and jets [Russell et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024Univ...10..273R/abstract). Together, these observatories will test open theoretical questions, such as whether the "shattering" of cold streams in massive halos drives galaxy quenching.

---

## Known Issues

*This article was auto-generated by [Lodestone](https://github.com/lodestone) and has not fully passed editorial review.*

> [!warning] Reviewer Notes
> This article has **2** flagged issue(s) (severity: **major**).
>
> **1. [factual error]** in *Feedback Regulation and Quenching*
> The article places this claim in a paragraph exclusively discussing stellar feedback in low- and intermediate-mass halos. However, Brennan et al. (2018) explicitly attributes the suppression of accretion by a factor of 30 to active galactic nucleus (AGN) feedback in massive halos ($10^{12.0}-10^{13.4} M_\odot$). Their abstract notes this suppression occurs specifically in their 'MrAGN' model with black hole accretion, contrasting it with their 'NoAGN' model which relies only on stellar feedback.
> → *Suggested fix:* Move this claim to the subsequent paragraph discussing AGN feedback in massive galaxies, and explicitly clarify that it is radiation-pressure-driven outflows from supermassive black holes (not stellar feedback) that suppress inflows by this magnitude.
>
> **2. [factual error]** in *Open Questions and Future Directions*
> The text misrepresents Sancisi et al. (2008). The cited abstract does not propose that HVCs deliver enough mass; rather, it reaches the exact opposite conclusion. It explicitly notes that visible cold gas accretion (like HVCs) yields only ~0.2 M_sun/yr, which is insufficient to sustain the typical star formation rate (~1 M_sun/yr), and states that 'additional infall of large amounts of gas from the IGM seems to be required.' Therefore, both cited studies agree that observed neutral accretion is insufficient.
> → *Suggested fix:* Revise the sentence to accurately reflect the scientific consensus that visible/neutral H I accretion is vastly insufficient to sustain local star formation (citing both papers as supporting this), which naturally motivates the subsequent discussion of 'invisible' ionized accretion.
>

> [!todo] Papers Not Yet Incorporated
> **15** relevant paper(s) could not be fully integrated:
>
> - [Gas accretion as a dominant formation mode in massive galaxies from the GOODS NICMOS Survey](https://ui.adsabs.harvard.edu/abs/2013MNRAS.430.1051C/abstract) (`2013MNRAS.430.1051C`)
>   - Suggested section: *Bimodal Accretion Paradigm and Transition Mass*
>   - Incorporate that gas accretion is found to be the dominant method for star formation and stellar mass assembly in galaxies with M > 10^11 solar masses at z = 1.5-3.
> - [How Gas Accretion Feeds Galactic Disks](https://ui.adsabs.harvard.edu/abs/2019ApJ...875...54H/abstract) (`2019ApJ...875...54H`)
>   - Suggested section: *Observational Signatures: Absorption and Emission*
>   - Mention that EAGLE simulations predict cold gas accretes anisotropically at speeds of 20-60 km/s and that extended cold gas disks (out to 60 kpc) can explain quasar sightline observations of corotating gas.
> - [Design and Scaling of an Omega-EP Experiment to Study Cold Streams Feeding Early Galaxies](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...27C/abstract) (`2019ApJS..245...27C`)
>   - Suggested section: *Instabilities and Interaction with the CGM*
>   - Reference the use of laboratory laser experiments (Omega-EP) to hydrodynamically scale and study the role of Kelvin-Helmholtz mixing in cold streams.
> - [Cold Gas Subgrid Model (CGSM): A Two-Fluid Framework for Modeling Unresolved Cold Gas in Galaxy Simulations](https://ui.adsabs.harvard.edu/abs/2024arXiv240203419B/abstract) (`2024arXiv240203419B`)
>   - Suggested section: *Open Questions and Future Directions*
>   - Note the development of the Cold Gas Subgrid Model (CGSM) to track unresolved cold cloudlets in cosmological simulations by modeling cold gas as a second fluid.
> - [Gas-rich dwarfs and accretion phenomena in early-type galaxies.](https://ui.adsabs.harvard.edu/abs/1979ApJ...234...86S/abstract) (`1979ApJ...234...86S`)
>   - Suggested section: *Historical Development and Theoretical Origins*
>   - Acknowledge Silk's 1979 work suggesting gas-rich dwarf accretion as a source of HI in early-type galaxies.
> - [Supermassive black hole feeding and feedback observed on subparsec scales](https://ui.adsabs.harvard.edu/abs/2023Sci...382..554I/abstract) (`2023Sci...382..554I`)
>   - Suggested section: *Chaotic Cold Accretion (CCA) and SMBH Feeding*
>   - Include recent submillimeter observations of the Circinus Galaxy showing dense molecular inflows on subparsec scales, with <3% of the gas reaching the black hole.
> - [Cold Flows and the First Quasars](https://ui.adsabs.harvard.edu/abs/2012ApJ...745L..29D/abstract) (`2012ApJ...745L..29D`)
>   - Suggested section: *Chaotic Cold Accretion (CCA) and SMBH Feeding*
>   - Highlight that at z > 7, cold flows can sustain critical accretion rates for 10^9 solar mass black holes because feedback is initially ineffective at stopping the penetration of these dense streams.
> - [The ALMA Discovery of the Rotating Disk and Fast Outflow of Cold Molecular Gas in NGC 1275](https://ui.adsabs.harvard.edu/abs/2019ApJ...883..193N/abstract) (`2019ApJ...883..193N`)
>   - Suggested section: *Chaotic Cold Accretion (CCA) and SMBH Feeding*
>   - Mention the ALMA detection of a 10^8 solar mass rotating molecular disk within the central 100 pc of NGC 1275, resembling structures predicted by CCA simulations.
> - [Shock and splash: gas and dark matter halo boundaries around ΛCDM galaxy clusters](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.2071A/abstract) (`2021MNRAS.508.2071A`)
>   - Suggested section: *The Bimodal Accretion Paradigm and Transition Mass*
>   - Note that accretion shocks are physically offset from the dark matter splashback radius, being 20-100% larger.
> - [The SRG/eROSITA All-Sky Survey. Detection of shock-heated gas beyond the halo boundary into the accretion region](https://ui.adsabs.harvard.edu/abs/2025arXiv250925317Z/abstract) (`2025arXiv250925317Z`)
>   - Suggested section: *Open Questions and Future Directions*
>   - Reference the SRG/eROSITA All-Sky Survey detection of hot gas extending out to 2 r200 (~4.5 Mpc), mapping the transition to the cosmic web accretion region.
> - [Cold mode gas accretion on two galaxy groups at z ∼ 2](https://ui.adsabs.harvard.edu/abs/2023MNRAS.519..961V/abstract) (`2023MNRAS.519..961V`)
>   - Suggested section: *Observational Signatures: Absorption and Emission*
>   - Include KCWI detections of Ly-alpha, CIV, and HeII emission lines showing kinematic patterns consistent with cold accretion in proto-group environments at z ~ 2.
> - [Ram-pressure accretion of intergalactic gas clouds by galaxies.](https://ui.adsabs.harvard.edu/abs/1993A&A...273...79S/abstract) (`1993A&A...273...79S`)
>   - Suggested section: *Historical Development and Theoretical Origins*
>   - Mention early theoretical models of ram-pressure capture of intergalactic gas clouds as a mechanism for AGN fueling and starburst triggering.
> - [Hot versus Cold: the Dichotomy in Spherical Accretion of Cooling Flows onto Supermassive Black Holes in Elliptical Galaxies, Galaxy Groups, and Clusters](https://ui.adsabs.harvard.edu/abs/2014ApJ...780..126G/abstract) (`2014ApJ...780..126G`)
>   - Suggested section: *Bimodal Accretion Paradigm and Transition Mass*
>   - Discuss the dichotomy where massive clusters host cold-mode accretion while group scales can maintain long-term hot-mode accretion due to compressional heating.
> - [The Evolution of Cooling Flows. II. Galaxies and Galaxy Formation](https://ui.adsabs.harvard.edu/abs/1988ApJ...329...16C/abstract) (`1988ApJ...329...16C`)
>   - Suggested section: *Historical Development and Theoretical Origins*
>   - Add Chevalier's (1988) self-similar solutions for accretion which first defined critical radii and masses for shock formation and cooling.
> - [Angular Momentum Accretion onto Disc Galaxies](https://ui.adsabs.harvard.edu/abs/2018arXiv181108432F/abstract) (`2018arXiv181108432F`)
>   - Suggested section: *Angular Momentum and Disk Formation*
>   - Include evidence that gas accretes onto discs with rotation velocities 20-30% lower than local circular speeds, which helps reproduce observed metallicity gradients.

---

## References

- Allgood et al. (2005). *Shapes and orientations of dark matter halos*. [ADS](https://ui.adsabs.harvard.edu/abs/2005PhDT........10A/abstract)
- Artymowicz et al. (1993). *Star Trapping and Metallicity Enrichment in Quasars and Active Galactic Nuclei*. [ADS](https://ui.adsabs.harvard.edu/abs/1993ApJ...409..592A/abstract)
- Aung et al. (2020). *Shock and splash: gas and dark matter halo boundaries around ΛCDM galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.2071A/abstract)
- Aung et al. (2024). *Entrainment of hot gas into cold streams: the origin of excessive star formation rates at cosmic noon*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.2965A/abstract)
- Aung et al. (2024). *Entrainment of hot gas into cold streams: The origin of excessive star-formation rates at cosmic noon*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.tmp.1659A/abstract)
- Ayromlou et al. (2023). *An Atlas of Gas Motions in the TNG-Cluster Simulation: from Cluster Cores to the Outskirts*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231106339A/abstract)
- Ayromlou et al. (2024). *An atlas of gas motions in the TNG-Cluster simulation: From cluster cores to the outskirts*. [ADS](https://ui.adsabs.harvard.edu/abs/2024A&A...690A..20A/abstract)
- Benson et al. (2010). *Cold Mode Accretion in Galaxy Formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2010arXiv1004.1162B/abstract)
- Benson et al. (2011). *Accretion shocks and cold filaments in galaxy formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2011MNRAS.410.2653B/abstract)
- Bhoonah et al. (2019). *Galactic Center gas clouds and novel bounds on ultralight dark photon, vector portal, strongly interacting, composite, and super-heavy dark matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2019PhRvD.100b3001B/abstract)
- Binney et al. (2014). *On the origin of the galaxy luminosity function*. [ADS](https://ui.adsabs.harvard.edu/abs/2004MNRAS.347.1093B/abstract)
- Blecher et al. (2024). *Neutral hydrogen lensing simulations in the hubble frontier fields*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.tmp.1668B/abstract)
- Blecher et al. (2024). *Neutral hydrogen lensing simulations in the hubble frontier fields*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.3236B/abstract)
- Bouché et al. (2013). *Signatures of Cool Gas Fueling a Star-Forming Galaxy at Redshift 2.3*. [ADS](https://ui.adsabs.harvard.edu/abs/2013Sci...341...50B/abstract)
- Bregman et al. (2009). *The Disk-Halo Connection and Where Has All The Gas Gone?*. [ADS](https://ui.adsabs.harvard.edu/abs/2009arXiv0907.3494B/abstract)
- Brennan et al. (2018). *Momentum-driven Winds from Radiatively Efficient Black Hole Accretion and Their Impact on Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2018ApJ...860...14B/abstract)
- Brooks et al. (2008). *The Role of Cold Flows in the Assembly of Galaxy Disks*. [ADS](https://ui.adsabs.harvard.edu/abs/2009ApJ...694..396B/abstract)
- Brooks et al. (2010). *Toward the Formation of Realistic Galaxy Disks*. [ADS](https://ui.adsabs.harvard.edu/abs/2010ASPC..432...17B/abstract)
- Bryan et al. (1994). *The Evolution of X-Ray Clusters in a Cold Plus Hot Dark Matter Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/1994ApJ...437L...5B/abstract)
- Bu et al. (2019). *What is the real accretion rate on to a black hole for low-angular-momentum accretion?*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.484.1724B/abstract)
- Butsky et al. (2024). *Cold Gas Subgrid Model (CGSM): A Two-Fluid Framework for Modeling Unresolved Cold Gas in Galaxy Simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240203419B/abstract)
- Cadiou et al. (2021). *Gravitational torques dominate the dynamics of accreted gas at z &gt; 2*. [ADS](https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.5429C/abstract)
- Canning et al. (2016). *Collisional excitation of [C II], [O I] and CO in massive galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2016MNRAS.455.3042C/abstract)
- Cao et al. (2022). *Multiple gas acquisition events in galaxies with dual misaligned gas disks*. [ADS](https://ui.adsabs.harvard.edu/abs/2022NatAs...6.1464C/abstract)
- Cavaliere et al. (2010). *Nonthermal support for the outer intracluster medium*. [ADS](https://ui.adsabs.harvard.edu/abs/2011A&A...525A.110C/abstract)
- Cheung et al. (2016). *SDSS-IV MaNGA: A Serendipitous Observation of a Potential Gas Accretion Event*. [ADS](https://ui.adsabs.harvard.edu/abs/2016ApJ...832..182C/abstract)
- Chevalier et al. (1988). *The Evolution of Cooling Flows. II. Galaxies and Galaxy Formation*. [ADS](https://ui.adsabs.harvard.edu/abs/1988ApJ...329...16C/abstract)
- Choi et al. (2008). *Effects of metal enrichment and metal cooling in galaxy growth and cosmic star formation history*. [ADS](https://ui.adsabs.harvard.edu/abs/2009MNRAS.393.1595C/abstract)
- Coffing et al. (2019). *Design and Scaling of an Omega-EP Experiment to Study Cold Streams Feeding Early Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...27C/abstract)
- Combes et al. (2004). *Dynamical Triggering of Starbursts*. [ADS](https://ui.adsabs.harvard.edu/abs/2005AIPC..783...43C/abstract)
- Combes et al. (2007). *Infall and Accretion*. [ADS](https://ui.adsabs.harvard.edu/abs/2008ASPC..390..369C/abstract)
- Combes et al. (2013). *Gas Accretion in Disk Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2014ASPC..480..211C/abstract)
- Conselice et al. (2012). *Gas accretion as a dominant formation mode in massive galaxies from the GOODS NICMOS Survey*. [ADS](https://ui.adsabs.harvard.edu/abs/2013MNRAS.430.1051C/abstract)
- Cooke et al. (2020). *Dying of the Light: An X-Ray Fading Cold Quasar at z ∼ 0.405*. [ADS](https://ui.adsabs.harvard.edu/abs/2020ApJ...903..106C/abstract)
- Cornuault et al. (2016). *Are Cosmological Gas Accretion Streams Multiphase and Turbulent?*. [ADS](https://ui.adsabs.harvard.edu/abs/2016arXiv160904405C/abstract)
- Correa et al. (2018). *The impact of feedback and the hot halo on the rates of gas accretion on to galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2018MNRAS.478..255C/abstract)
- Cortese et al. (2017). *ALMA Shows that Gas Reservoirs of Star-forming Disks over the Past 3 Billion Years Are Not Predominantly Molecular*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ApJ...848L...7C/abstract)
- Couchman et al. (1987). *The statistical clustering of pregalactic objects and resultant astrophysical consequences in cosmologies with Cold Dark Matter*. [ADS](https://ui.adsabs.harvard.edu/abs/1987MNRAS.225..795C/abstract)
- Cresci et al. (2010). *Gas accretion as the origin of chemical abundance gradients in distant galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2010Natur.467..811C/abstract)
- Crighton et al. (2013). *Metal-poor, Cool Gas in the Circumgalactic Medium of a z = 2.4 Star-forming Galaxy: Direct Evidence for Cold Accretion?*. [ADS](https://ui.adsabs.harvard.edu/abs/2013ApJ...776L..18C/abstract)
- Croft et al. (2002). *High-Redshift Galaxies and the Lyα Forest in a Cold Dark Matter Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2002ApJ...580..634C/abstract)
- Curran et al. (2024). *The depletion of star-forming gas by AGN activity in radio sources*. [ADS](https://ui.adsabs.harvard.edu/abs/2024PASA...41....7C/abstract)
- D'Onghia et al. (2003). *Cold Dark Matter's Small-Scale Crisis Grows Up*. [ADS](https://ui.adsabs.harvard.edu/abs/2004ApJ...612..628D/abstract)
- Dave et al. (2005). *REVIEW -Building Galaxies with Simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2006fdg..conf..219D/abstract)
- de Plaa et al. (2010). *Cold fronts and multi-temperature structures in the core of Abell 2052*. [ADS](https://ui.adsabs.harvard.edu/abs/2010A&A...523A..81D/abstract)
- Devriendt et al. (2009). *The dusty, albeit ultraviolet bright, infancy of galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2010MNRAS.403L..84D/abstract)
- Di Matteo et al. (1997). *Advectively dominated flows in the cores of giant elliptical galaxies: application to M60 (NGC 4649)*. [ADS](https://ui.adsabs.harvard.edu/abs/1997MNRAS.286L..50D/abstract)
- Di Matteo et al. (2011). *Cold Flows and the First Quasars*. [ADS](https://ui.adsabs.harvard.edu/abs/2012ApJ...745L..29D/abstract)
- Di Teodoro et al. (2020). *Cold gas in the Milky Way's nuclear wind*. [ADS](https://ui.adsabs.harvard.edu/abs/2020Natur.584..364D/abstract)
- Dijkstra et al. (2009). *Lyα blobs as an observational signature of cold accretion streams into galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2009MNRAS.400.1109D/abstract)
- Dubois et al. (2011). *How active galactic nucleus feedback and metal cooling shape cluster entropy profiles*. [ADS](https://ui.adsabs.harvard.edu/abs/2011MNRAS.417.1853D/abstract)
- Elmegreen et al. (2016). *Gas accretion from halos to disks: observations, curiosities, and problems*. [ADS](https://ui.adsabs.harvard.edu/abs/2016IAUS..317..204E/abstract)
- Ettori et al. (2013). *Cold fronts and metal anisotropies in the X-ray cool core of the galaxy cluster Zw 1742+3306*. [ADS](https://ui.adsabs.harvard.edu/abs/2013A&A...555A..93E/abstract)
- Faucher-Giguère et al. (2016). *Observational Diagnostics of Gas Flows: Insights from Cosmological Simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ASSL..430..271F/abstract)
- Fraternali et al. (2013). *How can star formation be sustained?*. [ADS](https://ui.adsabs.harvard.edu/abs/2014IAUS..298..228F/abstract)
- Fraternali et al. (2014). *Galactic hail: the origin of the high-velocity cloud complex C.*. [ADS](https://ui.adsabs.harvard.edu/abs/2015MNRAS.447L..70F/abstract)
- Fraternali et al. (2018). *Angular Momentum Accretion onto Disc Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2018arXiv181108432F/abstract)
- Friaça et al. (1998). *The effects of magnetic fields in cold clouds in cooling flows*. [ADS](https://ui.adsabs.harvard.edu/abs/1999MNRAS.302..491F/abstract)
- Gaspari et al. (2014). *Chaotic cold accretion on to black holes in rotating atmospheres*. [ADS](https://ui.adsabs.harvard.edu/abs/2015A&A...579A..62G/abstract)
- George et al. (1990). *X-ray illuminated accretion discs : a model for the iron line in NGC 3227.*. [ADS](https://ui.adsabs.harvard.edu/abs/1990MNRAS.242P..28G/abstract)
- Goerdt et al. (2012). *Detectability of cold streams into high-redshift galaxies by absorption lines*. [ADS](https://ui.adsabs.harvard.edu/abs/2012MNRAS.424.2292G/abstract)
- Goldman et al. (2022). *Gas accretion on to galaxies and Kelvin-Helmholtz turbulence*. [ADS](https://ui.adsabs.harvard.edu/abs/2023MNRAS.521.2949G/abstract)
- Grebel et al. (2004). *The Impact of Reionization on the Stellar Populations of Nearby Dwarf Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2004ApJ...610L..89G/abstract)
- Guo et al. (2013). *Hot versus Cold: the Dichotomy in Spherical Accretion of Cooling Flows onto Supermassive Black Holes in Elliptical Galaxies, Galaxy Groups, and Clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2014ApJ...780..126G/abstract)
- Hafen et al. (2018). *The origins of the circumgalactic medium in the FIRE simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.488.1248H/abstract)
- Hafen et al. (2022). *Hot-mode accretion and the physics of thin-disc galaxy formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.5056H/abstract)
- Hamer et al. (2013). *Cold gas dynamics in Hydra-A: evidence for a rotating disc*. [ADS](https://ui.adsabs.harvard.edu/abs/2014MNRAS.437..862H/abstract)
- Heald et al. (2007). *Anomalous H I Gas in NGC 4395: Signs of Gas Accretion*. [ADS](https://ui.adsabs.harvard.edu/abs/2008ASPC..396..267H/abstract)
- Hernquist et al. (1989). *Tidal triggering of starbursts and nuclear activity in galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/1989Natur.340..687H/abstract)
- Hillel et al. (2012). *Suppressing hot gas accretion to supermassive black holes by stellar winds*. [ADS](https://ui.adsabs.harvard.edu/abs/2013MNRAS.430.1970H/abstract)
- Ho et al. (2019). *How Gas Accretion Feeds Galactic Disks*. [ADS](https://ui.adsabs.harvard.edu/abs/2019ApJ...875...54H/abstract)
- Hogan et al. (1999). *Warm Dark Matter: Clues to Primordial Phase Density from the Structure of Galaxy Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/1999astro.ph.12549H/abstract)
- Hopkins et al. (2013). *Accretion does not drive the turbulence in galactic discs*. [ADS](https://ui.adsabs.harvard.edu/abs/2013MNRAS.432.2639H/abstract)
- Hou et al. (2021). *How well is angular momentum accretion modelled in semi-analytic galaxy formation models?*. [ADS](https://ui.adsabs.harvard.edu/abs/2021MNRAS.507.4241H/abstract)
- Hunter et al. (2024). *The Interstellar Medium in Dwarf Irregular Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2024ARA&A..62..113H/abstract)
- Iza et al. (2021). *Gas accretion onto the disc of a simulated Milky Way-mass galaxy*. [ADS](https://ui.adsabs.harvard.edu/abs/2021BAAA...62..143I/abstract)
- Izumi et al. (2023). *Supermassive black hole feeding and feedback observed on subparsec scales*. [ADS](https://ui.adsabs.harvard.edu/abs/2023Sci...382..554I/abstract)
- Kacprzak et al. (2016). *Gas Accretion in Star-Forming Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ASSL..430..145K/abstract)
- Kampakoglou et al. (2006). *Disc galaxy evolution along the Hubble sequence*. [ADS](https://ui.adsabs.harvard.edu/abs/2007MNRAS.380..646K/abstract)
- Kamphuis et al. (2022). *HALOGAS: Strong constraints on the neutral gas reservoir and accretion rate in nearby spiral galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2022A&A...668A.182K/abstract)
- Katz et al. (2002). *How Do Galaxies Get Their Gas?*. [ADS](https://ui.adsabs.harvard.edu/abs/2003ASSL..281..185K/abstract)
- Keres et al. (2007). *Growth of galaxies in SPH simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2007PhDT........11K/abstract)
- Kereš et al. (2004). *How do galaxies get their gas?*. [ADS](https://ui.adsabs.harvard.edu/abs/2005MNRAS.363....2K/abstract)
- Kereš et al. (2008). *Galaxies in a simulated ΛCDM Universe - I. Cold mode and hot cores*. [ADS](https://ui.adsabs.harvard.edu/abs/2009MNRAS.395..160K/abstract)
- Kereš et al. (2009). *Seeding the Formation of Cold Gaseous Clouds in Milky Way-Size Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/2009ApJ...700L...1K/abstract)
- Keshet et al. (2009). *Dynamics and Magnetization in Galaxy Cluster Cores Traced by X-ray Cold Fronts*. [ADS](https://ui.adsabs.harvard.edu/abs/2010ApJ...719L..74K/abstract)
- Khochfar et al. (2009). *Modeling the High-z Universe: Probing Galaxy Formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2009RvMA...21...87K/abstract)
- Kim et al. (2025). *Unified Gas Heating Constraints on Extended Dark Matter Compact Objects*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250818344K/abstract)
- Knapp et al. (1988). *Hot and Cold Gas in Early-Type Galaxies: a Comparison of X-Ray HI and Far Infrared Emission*. [ADS](https://ui.adsabs.harvard.edu/abs/1988ASIC..229...93K/abstract)
- Kocjan et al. (2023). *Hot gas accretion fuels star formation faster than cold accretion in high redshift galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2023arXiv231104961K/abstract)
- Kravtsov et al. (2009). *The Dark Matter Annihilation Signal from Dwarf Galaxies and Subhalos*. [ADS](https://ui.adsabs.harvard.edu/abs/2010AdAst2010E...8K/abstract)
- Krolik et al. (1990). *Fueling Active Galactic Nuclei by Magnetic Braking*. [ADS](https://ui.adsabs.harvard.edu/abs/1990ApJ...352L..33K/abstract)
- Köppen et al. (2005). *Effects of episodic gas infall on the chemical abundances in galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2005A&A...434..531K/abstract)
- Lagos et al. (2008). *Effects of AGN feedback on ΛCDM galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2008MNRAS.388..587L/abstract)
- Ledos et al. (2024). *Magnetising galaxies with cold inflows*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240817438L/abstract)
- Li et al. (2020). *An X‑ray view of the hot circum‑galactic medium*. [ADS](https://ui.adsabs.harvard.edu/abs/2020AN....341..177L/abstract)
- Li et al. (2026). *An azimuthally resolved study of sloshing cold fronts in three nearby galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260114392L/abstract)
- Lucchini et al. (2025). *Invisible Accretion: Ionized Envelopes of TNG50 HVCs can Sustain Star Formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250718687L/abstract)
- Macciò et al. (2005). *The Origin of Polar Ring Galaxies: Evidence for Galaxy Formation by Cold Accretion*. [ADS](https://ui.adsabs.harvard.edu/abs/2006ApJ...636L..25M/abstract)
- Mackenzie et al. (2017). *Evidence against a supervoid causing the CMB Cold Spot*. [ADS](https://ui.adsabs.harvard.edu/abs/2017MNRAS.470.2328M/abstract)
- Malagoli et al. (1987). *On the Thermal Instability of Galactic and Cluster Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/1987ApJ...319..632M/abstract)
- Mandelker et al. (2021). *Evolution of Cold Streams in the CGM of Massive Galaxies and Proto-Clusters at high-z*. [ADS](https://ui.adsabs.harvard.edu/abs/2021gcf2.confE..63M/abstract)
- Martin et al. (2016). *A Newly Forming Cold Flow Protogalactic Disk, a Signature of Cold Accretion from the Cosmic Web*. [ADS](https://ui.adsabs.harvard.edu/abs/2016ApJ...824L...5M/abstract)
- Martin et al. (2019). *Multi-filament gas inflows fuelling young star-forming galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2019NatAs...3..822M/abstract)
- Mathews et al. (1978). *Radiative accretion flow onto giant galaxies in clusters.*. [ADS](https://ui.adsabs.harvard.edu/abs/1978ApJ...224..308M/abstract)
- Menci et al. (2003). *Quasar Evolution Driven by Galaxy Encounters in Hierarchical Structures*. [ADS](https://ui.adsabs.harvard.edu/abs/2003ApJ...587L..63M/abstract)
- Mingozzi et al. (2021). *Outflows of cold gas in ram-pressure stripped galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2021essp.confE..57M/abstract)
- Murante et al. (2012). *A Warm Mode of Gas Accretion on Forming Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2012ApJ...749L..34M/abstract)
- Murayama et al. (1997). *Why Does NGC 1068 Have a More Powerful Active Galactic Nucleus than NGC 4258?*. [ADS](https://ui.adsabs.harvard.edu/abs/1997PASJ...49L..13M/abstract)
- Murray et al. (2004). *Energy Dissipation in Multiphase Infalling Clouds in Galaxy Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/2004ApJ...615..586M/abstract)
- Muñoz et al. (2012). *Faint AGN in z ≳ 6 Lyman-break galaxies powered by cold accretion and rapid angular momentum transport*. [ADS](https://ui.adsabs.harvard.edu/abs/2012MNRAS.426.3477M/abstract)
- Nagai et al. (2002). *Cold Fronts in Cold Dark Matter Clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2003ApJ...587..514N/abstract)
- Nagai et al. (2019). *The ALMA Discovery of the Rotating Disk and Fast Outflow of Cold Molecular Gas in NGC 1275*. [ADS](https://ui.adsabs.harvard.edu/abs/2019ApJ...883..193N/abstract)
- Narayan et al. (2002). *Why Do AGN Lighthouses Switch Off?*. [ADS](https://ui.adsabs.harvard.edu/abs/2002luml.conf..405N/abstract)
- Nayakshin et al. (2007). *Forced accretion in stochastically fed AGN and quasars*. [ADS](https://ui.adsabs.harvard.edu/abs/2007arXiv0705.1686N/abstract)
- Nelson et al. (2014). *Hydrodynamic Simulation of Non-thermal Pressure Profiles of Galaxy Clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2014ApJ...792...25N/abstract)
- Noguchi et al. (2018). *Possible Imprints of Cold-mode Accretion on the Present-day Properties of Disk Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2018ApJ...853...67N/abstract)
- Noguchi et al. (2019). *Morphological diversity of spiral galaxies originating in the cold gas inflow from cosmic webs*. [ADS](https://ui.adsabs.harvard.edu/abs/2019arXiv190508993N/abstract)
- Noguchi et al. (2020). *Structural diversity of disc galaxies originating in the cold gas inflow from cosmic webs*. [ADS](https://ui.adsabs.harvard.edu/abs/2020MNRAS.494L..37N/abstract)
- Noguchi et al. (2023). *Anatomy of galactic star formation history: roles of different modes of gas accretion, feedback, and recycling*. [ADS](https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.4691N/abstract)
- Nulsen et al. (1995). *The role of cooling flows in galaxy formation*. [ADS](https://ui.adsabs.harvard.edu/abs/1995MNRAS.277..561N/abstract)
- Ocvirk et al. (2008). *Bimodal gas accretion in the Horizon-MareNostrum galaxy formation simulation*. [ADS](https://ui.adsabs.harvard.edu/abs/2008MNRAS.390.1326O/abstract)
- Omoruyi et al. (2025). *A Deep Chandra View of Abell 2597: Bubbles, Shocks, Cold Fueling, and a Plasma Depletion Layer*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251113817O/abstract)
- Otaki et al. (2023). *Collision-induced formation of dark-matter-deficient galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2023IAUS..373..147O/abstract)
- Parker et al. (2017). *The response of relativistic outflowing gas to the inner accretion disk of a black hole*. [ADS](https://ui.adsabs.harvard.edu/abs/2017Natur.543...83P/abstract)
- Patil et al. (2017). *Accretion powered AGN feedback in the cores of galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2017arXiv170406047P/abstract)
- Peek et al. (2009). *Hitting the Bull's-Eye: The Radial Profile of Accretion and Star Formation in the Milky Way*. [ADS](https://ui.adsabs.harvard.edu/abs/2009ApJ...698.1429P/abstract)
- Peek et al. (2018). *Ongoing Galactic Accretion: Simulations and Observations of Condensed Gas in Hot Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/2008ApJ...674..227P/abstract)
- Peeples et al. (2019). *Understanding the circumgalactic medium is critical for understanding galaxy evolution*. [ADS](https://ui.adsabs.harvard.edu/abs/2019BAAS...51c.368P/abstract)
- Pezzulli et al. (2015). *Accretion, radial flows and abundance gradients in spiral galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2016MNRAS.455.2308P/abstract)
- Pfenniger et al. (2004). *Cold Molecular Gas as Baryonic Dark Matter*. [ADS](https://ui.adsabs.harvard.edu/abs/2004IAUS..220..241P/abstract)
- Pope et al. (2008). *Cold gas in the intracluster medium: implications for flow dynamics and powering optical nebulae*. [ADS](https://ui.adsabs.harvard.edu/abs/2008MNRAS.389.1259P/abstract)
- Popping et al. (2015). *Observations of the Intergalactic Medium and the Cosmic Web in the SKA era*. [ADS](https://ui.adsabs.harvard.edu/abs/2015aska.confE.132P/abstract)
- Powell et al. (2011). *The Impact of ISM Turbulence, Clustered Star Formation and Feedback on Galaxy Mass Assembly through Cold Flows and Mergers*. [ADS](https://ui.adsabs.harvard.edu/abs/2011IAUS..277..234P/abstract)
- Prasad et al. (2016). *AGN jet-driven stochastic cold accretion in cluster cores*. [ADS](https://ui.adsabs.harvard.edu/abs/2017MNRAS.471.1531P/abstract)
- Putman et al. (2012). *Gaseous Galaxy Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/2012ARA&A..50..491P/abstract)
- Qiu et al. (2021). *Dynamics and Morphology of Cold Gas in Fast, Radiatively Cooling Outflows: Constraining AGN Energetics with Horseshoes*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...917L...7Q/abstract)
- Quataert et al. (1999). *The Cooling Flow to Accretion Flow Transition*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...528..236Q/abstract)
- Rasmussen et al. (2006). *Investigating hot gas in the halos of two massive spirals: Observations and cosmological simulations*. [ADS](https://ui.adsabs.harvard.edu/abs/2006astro.ph.10893R/abstract)
- Reina-Campos et al. (2024). *The Star Clusters As Links between galaxy Evolution and Star formation (SCALES) project I: Numerical method*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv240804694R/abstract)
- Richter et al. (2016). *Gas Accretion onto the Milky Way*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ASSL..430...15R/abstract)
- Russell et al. (2024). *The Evolution of Galaxies and Clusters at High Spatial Resolution with Advanced X-ray Imaging Satellite (AXIS)*. [ADS](https://ui.adsabs.harvard.edu/abs/2024Univ...10..273R/abstract)
- Saintonge et al. (2022). *The Cold Interstellar Medium of Galaxies in the Local Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/2022ARA&A..60..319S/abstract)
- Salomé et al. (2016). *Cold molecular gas in the Perseus cluster core. Association with X-ray cavity, Hα filaments and cooling flow*. [ADS](https://ui.adsabs.harvard.edu/abs/2006A&A...454..437S/abstract)
- Sancisi et al. (2008). *Cold gas accretion in galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2008A&ARv..15..189S/abstract)
- Sankar et al. (2025). *Hot accretion onto spiral galaxies: the origin of extended and warped HI discs*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251103793S/abstract)
- Schellenberger et al. (2020). *A New Feedback Cycle in the Archetypal Cooling Flow Group NGC 5044*. [ADS](https://ui.adsabs.harvard.edu/abs/2021ApJ...906...16S/abstract)
- Scholz-Díaz et al. (2021). *History of the gas fuelling star formation in EAGLE galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2021MNRAS.505.4655S/abstract)
- Seidel et al. (2025). *Go with the flow: The self-similar and non-linear behaviour of large-scale in- and outflows and the impact of accretion shocks from galaxies to galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2025A&A...701A.192S/abstract)
- Semelin et al. (2005). *New multi-zoom method for N-body simulations: application to galaxy growth by accretion*. [ADS](https://ui.adsabs.harvard.edu/abs/2005A&A...441...55S/abstract)
- Shi et al. (2016). *Locations of accretion shocks around galaxy clusters and the ICM properties: insights from self-similar spherical collapse with arbitrary mass accretion rates*. [ADS](https://ui.adsabs.harvard.edu/abs/2016MNRAS.461.1804S/abstract)
- Shi et al. (2022). *Cold Gas in Massive Galaxies as a Critical Test of Black Hole Feedback Models*. [ADS](https://ui.adsabs.harvard.edu/abs/2022ApJ...927..189S/abstract)
- Silk et al. (1979). *Gas-rich dwarfs and accretion phenomena in early-type galaxies.*. [ADS](https://ui.adsabs.harvard.edu/abs/1979ApJ...234...86S/abstract)
- Silk et al. (1987). *Primeval Galaxies and Cold Dark Matter*. [ADS](https://ui.adsabs.harvard.edu/abs/1987ApJ...323L.107S/abstract)
- Sofue et al. (1993). *Ram-pressure accretion of intergalactic gas clouds by galaxies.*. [ADS](https://ui.adsabs.harvard.edu/abs/1993A&A...273...79S/abstract)
- Soker et al. (2010). *A moderate cooling flow phase at galaxy formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2010MNRAS.407.2355S/abstract)
- Somerville et al. (1998). *The Star Formation History in a Hierarchical Universe*. [ADS](https://ui.adsabs.harvard.edu/abs/1998astro.ph.11001S/abstract)
- Somerville et al. (2000). *The Nature of High-Redshift Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2000astro.ph..6364S/abstract)
- Sotira et al. (2026). *Cold gas formation triggered by active galactic nuclei jet feedback in galaxy cluster cores*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260114391S/abstract)
- Stern et al. (2019). *The maximum accretion rate of hot gas in dark matter haloes*. [ADS](https://ui.adsabs.harvard.edu/abs/2020MNRAS.492.6042S/abstract)
- Stern et al. (2024). *Accretion onto disc galaxies via hot and rotating CGM inflows*. [ADS](https://ui.adsabs.harvard.edu/abs/2024MNRAS.530.1711S/abstract)
- Stewart et al. (2010). *Observing the End of Cold Flow Accretion Using Halo Absorption Systems*. [ADS](https://ui.adsabs.harvard.edu/abs/2011ApJ...735L...1S/abstract)
- Stewart et al. (2013). *Angular Momentum Acquisition in Galaxy Halos*. [ADS](https://ui.adsabs.harvard.edu/abs/2013ApJ...769...74S/abstract)
- Stewart et al. (2016). *Gas Accretion and Angular Momentum*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ASSL..430..249S/abstract)
- Storchi-Bergmann et al. (2019). *Observational constraints on the feeding of supermassive black holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2019NatAs...3...48S/abstract)
- Sulkanen et al. (1989). *Low-Temperature Transonic Cooling Flows in Galaxy Clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/1989ApJ...344..604S/abstract)
- Sánchez Almeida et al. (2016). *Gas Accretion and Star Formation Rates*. [ADS](https://ui.adsabs.harvard.edu/abs/2017ASSL..430...67S/abstract)
- Tan et al. (2022). *Cloudy with a chance of rain: accretion braking of cold clouds*. [ADS](https://ui.adsabs.harvard.edu/abs/2023MNRAS.520.2571T/abstract)
- Thomas et al. (1988). *Cooling Flows in Galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/1988ASIC..229..235T/abstract)
- Totani et al. (2004). *Solving the Cooling Flow Problem of Galaxy Clusters by Dark Matter Neutralino Annihilation*. [ADS](https://ui.adsabs.harvard.edu/abs/2004PhRvL..92s1301T/abstract)
- Tremblay et al. (2016). *Cold, clumpy accretion onto an active supermassive black hole*. [ADS](https://ui.adsabs.harvard.edu/abs/2016Natur.534..218T/abstract)
- Tremblay et al. (2018). *A Galaxy-scale Fountain of Cold Molecular Gas Pumped by a Black Hole*. [ADS](https://ui.adsabs.harvard.edu/abs/2018ApJ...865...13T/abstract)
- van de Voort et al. (2010). *The rates and modes of gas accretion on to galaxies and their gaseous haloes*. [ADS](https://ui.adsabs.harvard.edu/abs/2011MNRAS.414.2458V/abstract)
- van de Voort et al. (2011). *Cold accretion flows and the nature of high column density H I absorption at redshift 3*. [ADS](https://ui.adsabs.harvard.edu/abs/2012MNRAS.421.2809V/abstract)
- van der Hulst et al. (2004). *Gas Accretion in Galactic Disks*. [ADS](https://ui.adsabs.harvard.edu/abs/2005ASPC..331..139V/abstract)
- Vayner et al. (2023). *Cold mode gas accretion on two galaxy groups at z ∼ 2*. [ADS](https://ui.adsabs.harvard.edu/abs/2023MNRAS.519..961V/abstract)
- Voit et al. (2003). *Signatures of Galaxy Formation in the Intracluster Medium*. [ADS](https://ui.adsabs.harvard.edu/abs/2003ApJ...594L..75V/abstract)
- Voit et al. (2014). *Cooling Time, Freefall Time, and Precipitation in the Cores of ACCEPT Galaxy Clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2015ApJ...799L...1V/abstract)
- Voit et al. (2015). *Regulation of star formation in giant galaxies by precipitation, feedback and conduction*. [ADS](https://ui.adsabs.harvard.edu/abs/2015Natur.519..203V/abstract)
- Vossberg et al. (2019). *The density distribution of accreting cosmic filaments as shaped by Kelvin-Helmholtz instability*. [ADS](https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.2130V/abstract)
- Wadekar et al. (2022). *Constraining axion and compact dark matter with interstellar medium heating*. [ADS](https://ui.adsabs.harvard.edu/abs/2023PhRvD.107h3011W/abstract)
- Wang et al. (2007). *Virialization Heating in Galaxy Formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2007astro.ph..1363W/abstract)
- Wang et al. (2014). *Cold stream stability during minor mergers.*. [ADS](https://ui.adsabs.harvard.edu/abs/2014MNRAS.439L..85W/abstract)
- Wang et al. (2026). *A Quiescent Galaxy in a Gas-Rich Cosmic Web Node at z~3*. [ADS](https://ui.adsabs.harvard.edu/abs/2026arXiv260120473W/abstract)
- Waterval et al. (2025). *Gas accretion at high redshift: cold flows all the way*. [ADS](https://ui.adsabs.harvard.edu/abs/2025MNRAS.537.2726W/abstract)
- Werner et al. (2018). *Hot Atmospheres, Cold Gas, AGN Feedback and the Evolution of Early Type Galaxies: A Topical Perspective*. [ADS](https://ui.adsabs.harvard.edu/abs/2019SSRv..215....5W/abstract)
- Woods et al. (2014). *The role of cold flows and reservoirs in galaxy formation with strong feedback*. [ADS](https://ui.adsabs.harvard.edu/abs/2014MNRAS.442..732W/abstract)
- Yao et al. (2024). *Effects of Cloud Geometry and Metallicity on Shattering and Coagulation of Cold Gas, and Implications for Cold Streams Penetrating Virial Shocks*. [ADS](https://ui.adsabs.harvard.edu/abs/2024arXiv241012914Y/abstract)
- Young et al. (2013). *The ATLAS<SUP>3D</SUP> project - XXVII. Cold gas and the colours and ages of early-type galaxies*. [ADS](https://ui.adsabs.harvard.edu/abs/2014MNRAS.444.3408Y/abstract)
- Young et al. (2014). *The Recent Evolution of Early-Type Galaxies as Seen in their Cold Gas*. [ADS](https://ui.adsabs.harvard.edu/abs/2015IAUS..309...47Y/abstract)
- Yuan et al. (2000). *The Role of the Outer Boundary Condition in Accretion Disk Models: Theory and Application*. [ADS](https://ui.adsabs.harvard.edu/abs/2000ApJ...537..236Y/abstract)
- Yuan et al. (2014). *Hot Accretion Flows Around Black Holes*. [ADS](https://ui.adsabs.harvard.edu/abs/2014ARA&A..52..529Y/abstract)
- Zhang et al. (2025). *Fire and Ice in the Whirlpool: Spatially Resolved Scaling Relations between X-ray Emitting Hot Gas and Cold Molecular Gas in M51*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250101613Z/abstract)
- Zhang et al. (2025). *The SRG/eROSITA All-Sky Survey. Detection of shock-heated gas beyond the halo boundary into the accretion region*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250925317Z/abstract)
- Zhang et al. (2025). *Fire and Ice in the Whirlpool: Spatially Resolved Scaling Relations between X-Ray-emitting Hot Gas and Cold Molecular Gas in M51*. [ADS](https://ui.adsabs.harvard.edu/abs/2025ApJ...978L..15Z/abstract)
- Zhuang et al. (2025). *Cold Gas Infall onto A Brightest Group Galaxy via A Gas-Rich Minor Merger*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv251213932Z/abstract)
- Zinger et al. (2016). *Cold fronts and shocks formed by gas streams in galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2018MNRAS.476...56Z/abstract)
- Zou et al. (2025). *Disturbed cold gas in galaxy and structure formation*. [ADS](https://ui.adsabs.harvard.edu/abs/2025arXiv250214705Z/abstract)
- Zuhone et al. (2016). *Cold fronts: probes of plasma astrophysics in galaxy clusters*. [ADS](https://ui.adsabs.harvard.edu/abs/2016JPlPh..82c5301Z/abstract)
- Ćiprijanović et al. (2018). *Constraining the Collective Radio Emission of Large Scale Accretion Shocks*. [ADS](https://ui.adsabs.harvard.edu/abs/2018arXiv180208939C/abstract)

<!-- Generated by Lodestone | iterations: 3 | converged: False | coverage: 0.58 | date: 2026-03-04T23:49:32Z -->
