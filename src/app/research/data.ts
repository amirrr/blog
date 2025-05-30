export interface ProjectLink {
  name: string;
  url: string;
}

export interface Research {
  id: string;
  title: string;
  summary: string;
  description: string; // Detailed content (Markdown) - will be used by detail components
  links: ProjectLink[];
  year: number;
  status: "Completed" | "Ongoing" | "Concept";
}

export const researchs: Research[] = [
  // Variable name can remain projects
  {
    id: "explaining-explanations",
    title: "Explaining Explanations: Understanding Scientific Inquiry",
    summary:
      "A project to systematically characterize, compare, and evaluate scientific explanations across disciplines, using empirical work and LLM tools.",
    description: `
      ### Project Motivation
      This project aims to understand how different scientific fields construct, prioritize, and evaluate explanations—and particularly, how these explanations relate to fields’ methodologies, predictive power, and social trust. We focus on taxonomizing explanations along several dimensions (e.g., mechanistic vs. functional, empirical vs. theoretical, simple vs. complex, individual vs. group level) and observing how these differ by field or audience (scientists, laypeople, managers).

      ### Key Themes & Research Questions
      - **Taxonomies of Explanation:**
          - By discipline (economic, sociological, historical, etc.)
          - Style (narrative, causal-mechanistic, evolutionary, null/spurious)
          - Properties (complex/simple, broad/narrow, empirical/theoretical)
      - What features make explanations persuasive or satisfying—and under what circumstances do people favor robust predictive power over a “good story”?
      - How much do scientists (and others) prefer certain styles of explanation over “null” models (e.g., randomness or spurious correlation)?
      - Can LLMs (large language models, e.g., GPT) extract and generate explanations that mimic domain norms, and can they help us map the explanation-space of a literature?
      - How do explanation styles correlate with credibility, perceived generalizability, prediction, and acceptance—by field and audience?
      - Can we create a “map” of the explanation landscape of a field and relate that to scientific progress, field-level biases, or prediction accuracy?

      ### Methods & Design
      - **Labeling explanations** from papers using various taxonomies (categories or axes), sometimes by hand, sometimes using LLMs (GPT). Features to pull include use of RCTs, field experiments, heterogeneity, causal claims, statistical rigor, etc.
      - **Synthetic and empirical tasks:**
          - Present subjects with pairs of explanations for phenomena (some spurious, some robust) and ask them to rate/prefer/choose.
          - Present competing explanations for outcomes of bets/prediction markets.
          - Ask scientists directly about what evidence would change their mind, or what styles of explanation are most convincing.
          - Use LLMs to generate explanations in various styles and see which audiences prefer in which circumstances.
      - **Data sources & candidates:** Snopes, ELI5, annotated literature (e.g., nudge/behavioral economics), ATLAS and SCORE datasets.

      ### Operational Axes for Explanation
      - Complexity
      - Scope (broad vs narrow)
      - Deterministic vs Probabilistic
      - Abstract vs Concrete
      - Empirical vs Theoretical basis
      - Personal vs Impersonal
      - Temporal orientation
      - Internal vs External locus
      - **Additional features:** use of data, explicit mention of mechanism, account of heterogeneity, policy relevance, generalizability, logical chain or narrative structure.

      ### Practical Steps & Experiments
      - Pilots with up to 100 people rating explanations for ~100 phenomena (using, for example, Mechanical Turk, with $5/person as a pilot budget).
      - Use both binary choices and Likert scales; possibly compare human explanations vs. LLM-generated ones in terms of convincingness.
      - Start with abstracts, later expand to full papers as methods/tools improve.
      - Label a literature (e.g., nudge papers) by explanation type and attempt to correlate with effect size or replicability.

      ### Wider Goals & Theoretical Implications
      - Build software tools & datasets for rating/coding explanations.
      - Develop a systematic, scalable way to compare and critique explanations across disciplines—for science-of-science, epistemology, and HCI communities.
      - Address deep questions: Is explanation just “satisfying narrative” versus actual understanding? Does explanatory style impact scientific progress, field norms, or societal trust?
      - Possible position/argumentative piece: analog to Gould & Lewontin’s “spandrels” essay, but for explanation in the social sciences.

      ### In Sum
      This project seeks to systematically characterize, compare, and evaluate scientific explanations using a practical taxonomy, a blend of empirical work and LLM tools, with the long-term aim of understanding the consequences of explanatory choices for science (predictive power, trust, field progress) and public understanding. The team is experimenting with both methodological synthesis and empirical validation, with an initial focus on gathering annotated data and running pilot tasks for feasibility and insight.
    `,
    links: [],
    year: 2024,
    status: "Ongoing",
  },
  {
    id: "global-common-sense-study",
    title: "Global Common Sense Study",
    summary:
      'A large-scale survey exploring variations in common sense across different languages and cultures, building on the "Framework for Quantifying Common Sense".',
    description: `
      ### Advancing Our Understanding of Collective Common Sense

      This research expands on the foundational work presented in the PNAS paper, ["A Framework for Quantifying Individual and Collective Common Sense"](https://www.pnas.org/doi/10.1073/pnas.2306707120). We are conducting a large-scale common sense survey, translated into multiple languages, to understand how perceptions of common sense vary among individuals and across different cultural contexts worldwide. Our approach allows us to define and measure an individual's "commonsensicality" as described in related research (see "Individual commonsensicality" paper linked below).

      Our goal is to build a comprehensive map of what humans collectively deem to be 'common sense' and to explore the factors that shape these judgments.
    `,
    links: [
      {
        name: "Common Sense Platform",
        url: "https://commonsense.seas.upenn.edu/",
      },
      {
        name: "GitHub Repository",
        url: "https://github.com/Watts-Lab/commonsense-platform/",
      },
      {
        name: "Original PNAS Framework Paper",
        url: "https://www.pnas.org/doi/10.1073/pnas.2306707120",
      },
      {
        name: "PNAS Paper on Individual Commonsensicality",
        url: "https://www.pnas.org/doi/10.1073/pnas.2309535121",
      },
    ],
    year: 2024,
    status: "Ongoing",
  },
  {
    id: "ai-climate-model",
    title: "AI-Powered Climate Model",
    summary:
      "Predicting regional climate changes with higher accuracy using machine learning and diverse environmental datasets.",
    description: `
      ### Overview
      This project focuses on developing a novel machine learning model to predict regional climate changes. By integrating diverse environmental datasets, including satellite imagery, weather patterns, and oceanic temperatures, we aim to achieve higher accuracy than traditional models.

      ### Methodology
      - **Data Sources:** ERA5 reanalysis, MODIS satellite data, GHCN daily weather stations.
      - **Models Used:** Convolutional Neural Networks (CNNs) for spatial pattern recognition, Long Short-Term Memory (LSTM) networks for time-series forecasting.
      - **Validation:** Cross-validation techniques and comparison against established climate model outputs.

      ### Key Preliminary Findings
      - Improved prediction of extreme weather events by 15% in test regions.
      - Identified novel correlations between oceanic heat content and atmospheric circulation patterns.

      ### Next Steps
      - Incorporate socio-economic data for impact assessment.
      - Optimize model for computational efficiency.
    `,
    links: [
      { name: "Preprint", url: "#" },
      { name: "GitHub Repo", url: "#" },
      { name: "Demo Video", url: "#" },
    ],
    year: 2023,
    status: "Ongoing",
  },
  {
    id: "quantum-entanglement-simulator",
    title: "Quantum Entanglement Simulator",
    summary:
      "A Python-based educational tool for visualizing and experimenting with quantum entanglement phenomena.",
    description: `
      ### Project Goal
      To create an accessible, Python-based simulator that helps students and enthusiasts understand the counter-intuitive principles of quantum entanglement.

      ### Features
      - Visualization of qubit states and entangled pairs.
      - Interactive simulation of Bell tests.
      - Educational modules explaining core concepts like superposition and measurement.

      \`\`\`python
      # Simplified conceptual snippet
      def create_entangled_pair():
          q1, q2 = Qubit(), Qubit()
          # Apply Hadamard and CNOT gates
          q1.h()
          q1.cnot(q2)
          return q1, q2
      \`\`\`

      ### Technologies
      - Python, NumPy, Matplotlib for simulation and plotting.
      - Jupyter Notebooks for interactive examples.
    `,
    links: [
      { name: "GitHub Repo", url: "#" },
      { name: "Documentation", url: "#" },
    ],
    year: 2022,
    status: "Completed",
  },
  {
    id: "nlp-healthcare-analysis",
    title: "NLP for Healthcare Record Analysis",
    summary:
      "Utilizing Natural Language Processing to extract meaningful insights from unstructured healthcare records for improved patient outcomes.",
    description: `
      ### Challenge
      A vast amount of critical patient information is locked within unstructured text in electronic health records (EHRs), such as clinical notes and discharge summaries. This project aims to unlock this information using NLP.

      ### Approach
      - **Named Entity Recognition (NER):** Identifying medical conditions, medications, procedures.
      - **Relation Extraction:** Understanding relationships between entities (e.g., medication administered for a condition).
      - **Sentiment Analysis:** Gauging patient-reported outcomes or physician assessments.

      ### Potential Impact
      - Enhanced clinical decision support systems.
      - Personalized treatment plan recommendations.
      - Early identification of adverse drug events.
    `,
    links: [{ name: "Publication", url: "#" }],
    year: 2024,
    status: "Ongoing",
  },
  {
    id: "ethical-ai-framework",
    title: "Ethical AI Framework for Autonomous Systems",
    summary:
      "Developing a comprehensive framework for ensuring ethical considerations in the design and deployment of autonomous systems.",
    description: `
      ### The Need for an Ethical Framework
      As autonomous systems become more prevalent (e.g., self-driving cars, autonomous weapons, AI in hiring), ensuring they operate ethically is paramount. This project addresses this by proposing a multi-faceted framework.

      ### Core Pillars of the Framework
      1.  **Transparency:** Mechanisms for understanding AI decision-making.
      2.  **Fairness:** Auditing and mitigating biases in algorithms and data.
      3.  **Accountability:** Clear lines of responsibility for system actions.
      4.  **Robustness & Safety:** Ensuring systems operate reliably and safely under various conditions.

      ### Outputs
      - A detailed Whitepaper outlining the framework.
      - A Conference Presentation discussing case studies and implementation challenges.
    `,
    links: [
      { name: "Whitepaper", url: "#" },
      { name: "Conference Presentation", url: "#" },
    ],
    year: 2023,
    status: "Completed",
  },
];
