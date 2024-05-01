// @flow
import * as d3 from "d3";

export type TrackId =
  | "FLEXIBLE_THINKING"
  | "DECISION_MAKING"
  | "PROFESSIONAL_GROWTH"
  | "HIRING"
  | "EFFECTIVE_COMMUNICATION"
  | "COLLABORATION"
  | "ORGANIZATIONAL_HEALTH"
  | "WORK_BREAKDOWN"
  | "BUSINESS_ACUMEN"
  | "TECHNICAL_STRATEGY"
  | "CODE_FLUENCY"
  | "SOFTWARE_DESIGN"
  | "ARCHITECTURE_DESIGN";

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5;

export type MilestoneMap = {
  FLEXIBLE_THINKING: Milestone,
  DECISION_MAKING: Milestone,
  PROFESSIONAL_GROWTH: Milestone,
  HIRING: Milestone,
  EFFECTIVE_COMMUNICATION: Milestone,
  COLLABORATION: Milestone,
  ORGANIZATIONAL_HEALTH: Milestone,
  WORK_BREAKDOWN: Milestone,
  BUSINESS_ACUMEN: Milestone,
  TECHNICAL_STRATEGY: Milestone,
  CODE_FLUENCY: Milestone,
  SOFTWARE_DESIGN: Milestone,
  ARCHITECTURE_DESIGN: Milestone,
};

export const milestones = [0, 1, 2, 3, 4, 5];

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;
    case 4:
      return 12;
    case 5:
      return 20;
    default:
      return 0;
  }
};

export const pointsToLevels = {
  "0": "1.1",
  "5": "1.2",
  "11": "1.3",
  "17": "2.1",
  "23": "2.2",
  "29": "2.3",
  "36": "3.1",
  "43": "3.2",
  "50": "3.3",
  "58": "4.1",
  "66": "4.2",
  "74": "4.3",
  "90": "5.1",
  "110": "5.2",
  "135": "5.3",
};

export const maxLevel = 135;

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[],
  }[],
};

type Tracks = {|
  FLEXIBLE_THINKING: Track,
  DECISION_MAKING: Track,
  PROFESSIONAL_GROWTH: Track,
  HIRING: Track,
  EFFECTIVE_COMMUNICATION: Track,
  COLLABORATION: Track,
  ORGANIZATIONAL_HEALTH: Track,
  WORK_BREAKDOWN: Track,
  BUSINESS_ACUMEN: Track,
  TECHNICAL_STRATEGY: Track,
  CODE_FLUENCY: Track,
  SOFTWARE_DESIGN: Track,
  ARCHITECTURE_DESIGN: Track,
|};

export const tracks: Tracks = {
  FLEXIBLE_THINKING: {
    displayName: "Flexible thinking",
    category: "A",
    description:
      "Ability to adapt problem-solving approaches in dynamic environments, incorporating new perspectives and ideas and getting things done.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You prioritize impactful tasks and don't over complicate your work. When necessary, you propose appropriate scope adjustments.",
          "You have an open mindset to change, and are enthusiastic about new initiatives.",
          "You are learning to stay calm under pressure and building practices to take care of your well-being.",
          "You find new and creative ways to accomplish your work, and share your ideas with the team.",
          "You make your best effort to decide and act responsibly without having the total picture during routine business and when in high pressure situations.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You can identify when your results aren’t moving the needle for our business/team goals or serving the needs of customers in a meaningful way and work with your manager and TL to redirect your focus.",
          "You remain resilient through change by staying calm under pressure and taking care of your well-being.",
          "You navigate ambiguity by focusing on the greater purpose, goals, and desired impact to move forward one step at a time.",
          "You effectively handle risk, change, and uncertainty within your team.",
          "When you encounter barriers, you unblock yourself and your team by proactively assessing and eliminating the root cause.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You find new and creative ways of leveraging customer insights and including customer voices to influence strategy.",
          "You exemplify the “leave it better than you found it” philosophy.",
          'You reject the "not my problem" mentality and seize opportunities to contribute with enthusiasm.',
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
    ],
  },

  DECISION_MAKING: {
    displayName: "Decision Making",
    category: "A",
    description:
      "The process and ability to make choices that drive business outcomes, including strategic and tactical decisions.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You identify and gather input from the right stakeholders and consider customer needs to make informed and timely decisions.",
          "You escalate to your manager or more senior team members when you get stuck and need help with a decision concerning your deliverables or priorities, always striving to provide a well-thought-out and timely proposition.",
          "You are working to develop a bias for action.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You make informed decisions by consulting the right stakeholders and balancing details with the big picture. You execute against the spirit, and not just the letter of the requirements.",
          "You understand the implications of your decisions and adjust your approach based on the impact and risk in the short and long-term (e.g. choosing a more iterative approach based on the degree of uncertainty with respect to product fit, while maintaining a view of the long term arc needed to - accomplish business goals).",
          "You make timely decisions and don’t cut corners that would compromise your customer’s trust or our strategy.",
          "When possible you leverage customer insights or data to inform decisions, balancing value for the customer with other business goals.",
          "You have a bias for action, act with urgency and deliver high-quality work that will add the most value for our business, cross-functional stakeholders, and customers.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You make informed decisions by having productive debate with the right stakeholders, seeking diverse perspectives, balancing details with the big picture, and optimizing for the company, then the team and lastly the individual.",
          "You consistently leverage insights about customers to inform decisions, balancing value for the customer with other business goals.",
          "You decide and act responsibly in your work with your team without having the total picture during routine business, as well as when in high pressure situations.",
          "You know when to seek consensus and when to make a decision swiftly on your own.",
          "You make decisions that support the goals of related teams and outside partners, avoiding choices that benefit only your immediate team if they negatively impact others.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You exercise judgment that favors the priorities of the wider Tech domain rather than favoring locally optimal outcomes.",
          "You transcend organizational boundaries and proactively identify the best way to leverage yourself and get things done.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
    ],
  },

  PROFESSIONAL_GROWTH: {
    displayName: "Professional Growth",
    category: "A",
    description:
      "Ongoing development of one's skills and capabilities to take on larger roles and navigate complex challenges.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You model integrity and have a high standard of excellence for your work.",
          "You have self-awareness about your strengths and areas for development.",
          "You drive discussions with your manager about aspirational goals and seek out opportunities to learn and grow.",
          "You are starting to deliver praise and constructive feedback in a useful manner.",
          "You know how to receive feedback and work to use feedback that you receive as a tool for growth.",
          "You understand our pull requests and code review best practices and try to apply them while asking and receiving feedback.",
          "You drive yourself to grow and achieve your own goals.",
          "You seek out mentorship to grow your own experience.",
          "You work toward building a study routine with knowledge sources, such as newsletters, podcasts, books, twitter relevant people, etc.",
          "You own your career growth and understand that your manager will provide all the support you'll need to grow, but also that you are the protagonist of your own success.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You consistently deliver praise and constructive feedback to your teammates and manager in a useful manner that fosters psychological safety.",
          "You follow up on sent feedback to let the person know whether improvement has been noted.",
          "You follow up on received feedback to check if the person that sent it has noticed improvement.",
          "You understand the importance of lifelong learning and actively enhance your study methods and self-learning strategies to continuously advance your expertise in line with industry evolution.",
          "You build tools and produce technical documentation to improve developer efficiency and drive alignment within your team.",
          "You are self-aware about your strengths and areas of development and act upon them.",
          "You sometimes make code reviews for other teams.",
          "You actively support the growth of your teammates by taking into account their unique skills, strengths, backgrounds and working styles.",
          "You actively look for opportunities to mentor new hires, interns and apprentices.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You foster a culture of delivering praise and constructive feedback and seeking out feedback within their team and team's respective business stakeholders.",
          "You actively provide high-quality reviews of your colleagues' work, including documentation and code, across different teams.",
          "You actively identify and support areas of growth for your teammates that take into account their unique skills, strengths, backgrounds and working styles.",
          "You exemplify lifelong learning, consistently integrating industry knowledge and learning into your daily practices to maintain a competitive edge.",
          "You devote time to spreading your knowledge widely via talks (Tech Days, Engineering Alignment, Tech Talks), blog posts or written documentation.",
          "You are a strong leader for your team with your multiplier impact beginning to also extend outside your team.",
          "You proactively and consistently upskill less-experienced members by helping them with their craft, providing guidance, and setting a good example.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You foster a culture of delivering praise and constructive feedback and seeking out feedback across several teams as well as their respective business stakeholders.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "You foster a culture of delivering praise and constructive feedback and seeking out feedback across the organization.",
        ],
        examples: ["to de added"],
      },
    ],
  },

  HIRING: {
    displayName: "Hiring",
    category: "A",
    description:
      "The process of identifying, evaluating, and selecting candidates to fill roles, shaping team composition and capabilities.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You refer awesome candidates to open positions at our company if you know individuals who fit the profile.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You give quality code reviews and feedback to candidates.",
          "You are learning to interview and assess candidates to help us build a diverse and talented team. You try to provide timely, detailed, and evidence-based interview feedback.",
          "You are able to represent your team’s initiatives and goals to candidates in a compelling way.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You actively contribute to interviewing and assessing candidates to help us build a diverse and talented team by conducting more advanced domain-specific and leveling interviews, asking good questions, and taking notes.",
          "You contribute to debriefings and hiring decisions.",
          "You gain the trust of candidates and can represent Lepaya's values, mission, strategy, and culture throughout the interview process.",
          "You are an effective partner to the hiring manager and are able to represent your team’s technical challenges to candidates in an exciting way.",
          "You make contributions to the hiring process, such as improvements on the challenges.",
          "You attract talent for a variety of roles with diversity in mind.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You are an active participant in the hiring process for senior candidates, and managers (for example, by participating in hiring committees, debriefs, etc.).",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
    ],
  },

  EFFECTIVE_COMMUNICATION: {
    displayName: "Effective communication",
    category: "A",
    description:
      "Effective transmission of ideas, feedback exchange, promoting growth, understanding and collaboration among stakeholders.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You explain detailed information accurately and articulately.",
          "You proactively share relevant information and effectively contribute to discussions, including difficult task-level trade-offs that impact the product to your manager and team (including product/business stakeholders).",
          "You communicate effectively, clearly, concisely in written and verbal form both technical and non technical subjects (commit messages, code code reviews, pull request descriptions, docs, meetings, slack messages, RFCs).",
          "You aim to over communicate when the information is important, to guarantee shared understanding.",
          "You actively listen and ask clarifying questions to others and ensure they are understood.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You are learning to tailor the level of abstraction of the message according to the audience.",
          "You consistently over communicate when the information is important, to guarantee shared understanding.",
          "You pay attention to nonverbal communication.",
          "You are learning to hold crucial conversations even when uncomfortable.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You communicate proactively, effectively, clearly, concisely in written and verbal form both technical and non technical subjects, and in an audience-oriented way (technical and/or business language).",
          "You successfully tailor the level of abstraction of the message according to the audience.",
          "You foster a culture of clear, concise, effective, audience-oriented communication, ensuring everyone actively listens to others and are understood.",
          "You influence stakeholders across a variety of audiences.",
          "You are effective in holding crucial conversations even when uncomfortable.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You create crisp narratives to create understanding, influence others, and enable effective decision-making.",
          "You fine tune your approach to getting buy-in and influencing stakeholders across a variety of audiences.",
          "You can translate complex information into straightforward, easy-to-understand terms for your listeners.",
          "You lead by example by holding crucial conversations even when they feel uncomfortable.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "You develop compelling, clear and focused messages, and effectively present them at the executive level.",
          "You successfully communicate effectively across the organization.",
        ],
        examples: ["to de added"],
      },
    ],
  },

  COLLABORATION: {
    displayName: "Collaboration",
    category: "A",
    description:
      "Working cohesively with others towards common goals, ensuring cross-functional alignment and synergy.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You can effectively collaborate and adopt necessary tools and practices (e.g., your local dev environment, pair programming) that get work done.",
          "You work with your manager to engage in productive conflict with thoughtful questioning and have the courage to state your point of view with your teammates.",
          "You avoid blame, clarify problems to focus on solutions, and “disagree and commit” when necessary to move decisions forward.",
          "You are learning pair programming techniques, proactively seek out sessions, and come well prepared with research, notes, and questions to ensure productive collaboration.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You build relationships across teams and help get to positive outcomes.",
          "You navigate productive conflict and express your viewpoint with confidence, while proactively communicating and coordinating your team's needs with other engineering groups.",
          "You are capable of working with cross-functional stakeholders to identify technical blindspots and clarify ambiguity in their ideas.",
          "You understand the concept of social capital and use it to build trust and foster relationships that enhance collaboration.",
          "You frequently initiate pair programming sessions, collaborating effectively as both a navigator and driver, enhancing collective code quality and knowledge.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You proactively communicate and coordinate your team’s requirements with other groups and teams.",
          "You engage in productive conflict with thoughtful questioning and have the courage to state your point of view in your interactions across the organization.",
          "You actively foster a team environment where pair programming is standard practice, sharing your expertise to elevate the entire team's development process.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You help break down silos within and across functions and influence others to reach the best outcome for Lepaya regardless of level/title.",
          "You build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
          "You balance multiple perspectives and disagree and commit when necessary to move key company decisions, and critical priorities forward.",
          "You transcend organizational boundaries and proactively identify the best ways to leverage yourself and solve problems.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
    ],
  },

  ORGANIZATIONAL_HEALTH: {
    displayName: "Organizational Health",
    category: "A",
    description:
      "Ensuring the overall well-being and efficiency of the organization through strategic overview and management practices.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You listen to different perspectives and you remove biases from your words and actions.",
          "You contribute to a positive sense of community on your team (e.g. engage in team lunches, team offsites, and other virtual or in-person group activities, help with new-hire on-boarding).",
          "You understand the importance of a diverse and inclusive team.",
          "You express emotions constructively and without aggressiveness.",
          "You apply Lepaya's values on your day to day activities.",
          "You apply virtual-first practices that enable your team to collaborate effectively and inclusively.",
          'You are willing to do grungy work when asked ("sweep the floors").',
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You help shape the Lepaya engineering culture through your involvement with activities outside of your team (e.g. presenting tech talks or on engineering alignments, participating in - RFCs, book clubs, creating interview questions).",
          "You promote and role model Lepaya core values, leading by example.",
          "You foster a culture of diversity, equity, and inclusion across the company and support an environment where everyone is included and heard.",
          "You actively contribute to an environment with psychological safety.",
          "You point out when actions or decisions contradict Lepaya core's values and suggest alternatives more aligned with our values.",
          "You take responsibility for doing grungy work (bugs, testing, cleanup) related to your team's scope, even if ownership is fuzzy.",
          "You connect with others with empathy and understanding.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "Working with your manager, you leverage the unique strengths & skills of the members of your team, and help identify talent gaps required for team success.",
          "You act as a partner to your manager in setting the cultural tone for the team. You create an environment of psychological safety where all Lepayans are included and heard to support connection, empathy, and productive conflict where dissenting opinions are valued and addressed.",
          "You champion good virtual-first practices that help your team collaborate effectively and inclusively.",
          "You lead by example. You are aware of your public presence and actions and their influence on the people around them and Lepaya's culture.",
          "You create psychological safety and encourage a growth mindset with colleagues, supporting experimentation and iteration towards audacious goals and promoting a blameless culture.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You build relationships and connections, and use inclusive meeting practices to support an inclusive environment for all Lepayans.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
    ],
  },

  WORK_BREAKDOWN: {
    displayName: "Work breakdown",
    category: "A",
    description:
      "The process of deconstructing projects into manageable parts, ensuring clarity and alignment for execution.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You understand how the team breaks down the work.",
          "You are learning to work in short iterations, and when longer iterations are necessary. With guidance from your teammates and manager, you're ensuring that tasks are sized suitably for continuous integration and incremental delivery.",
          "You are learning to estimate work similar to what you have previously done.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You understand how your tasks relate to your team's objectives and strategy. For each task executed, you zoom out and make a sanity check to guarantee the breakdown makes sense and is helping to achieve the team objectives.",
          "You actively work in short iterations, deploying code daily, and consciously choose longer iterations when they are more effective.",
          "You think a step or two ahead in your work, solve the right problems before they become bigger problems, and problem-solve with more experienced engineers when you are stuck.",
          "You are proficient in estimating familiar tasks and are learning to estimate",
          "You are becoming a product-minded professional and bring well-backed product suggestions and product/engineering tradeoffs to the table.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You plan and review epics and projects critically and ensure they’re appropriately broken down and prioritized, and well understood by the team.",
          "You help the team members understand how their work connects with team objectives and strategy.",
          "You provide accurate estimates, effectively and timely communicating uncertainties and potential delays with a well-defined risk assessment approach.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You review cross-team work critically and ensure it’s appropriately broken down and prioritized, and well understood by all involved teams.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "You review organization-wide work critically and ensure it’s appropriately broken down and prioritized across the organization.",
        ],
        examples: ["to de added"],
      },
    ],
  },

  BUSINESS_ACUMEN: {
    displayName: "Business Acumen",
    category: "A",
    description:
      "Understanding and leveraging business dynamics and product to make informed decisions that contribute to organizational success.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You engage in active listening sessions (Weekly peeks, Engineering Alignments, ad-hoc Lepaya sessions, etc.) to increase your learning and guide your work/priorities.",
          "You have a basic understanding of your team's domain and how it contributes to overall business strategy.",
          "You understand Lepaya's trainings basic structures like Programs, Modules, Bites and Classrooms.",
          "You participate in Lepaya's training sessions regularly, where you not only gain knowledge but also actively provide feedback to enhance the product.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You have a working knowledge of Lepaya's organizational/team structure and understand how teams work together across Lepaya.",
          "You understand the whole Lepaya's training flow and the big picture of how the systems Lepaya builds support the business.",
          "Product Expertise - You actively keep customer needs in mind and leverage input from product stakeholders as available to determine the right technical solutions to deliver customer value quickly.",
          "You understand your customers, the business’s goals and your team’s goals. You ensure your work will have the greatest customer impact.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You have a thorough understanding of your team's domains, and how it contributes to overall business strategy.",
          "You have a strong alliance with your product manager and seek frequent feedback from them.",
          "You are a product-minded professional and bring well-backed product suggestions and product/engineering tradeoffs to the table.",
          "You are well-versed in the HR tool ecosystem, including LMS, LXD, HRIS, and understand where Lepaya's systems fit within this landscape, using this knowledge to shape the development within your work domain.",
          "Domain Expertise - You demonstrate a high level of depth in your team's domain.",
          "You know which levers to pull to drive meaningful results and understand the wider, cross-functional implications of your work.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You have a thorough understanding of your domain, strategy, and how it aligns with broader market trends, enabling you to effectively contribute to the strategy definition.",
          "You deeply comprehend adjacent teams' strategies, the intersection with your team, and effectively communicate these correlations within your domain.",
          "Domain Expertise - You demonstrate a high level of depth in your stream.",
          "Innovation - You partner with cross-functional stakeholders to identify major new business opportunities unlocked by technical capabilities.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "You have a deep understanding of the entire business and how its domains contribute to the overarching business strategy.",
          "You proactively anticipate industry trends, allowing you to integrate these insights strategically, positively impacting the business's direction.",
        ],
        examples: ["to de added"],
      },
    ],
  },

  TECHNICAL_STRATEGY: {
    displayName: "Technical Strategy",
    category: "B",
    description:
      "Ensuring the right long-term technical decisions are being made by the organization - knowing what systems to build; making technical choices when there are not clear solutions. What standards apply to all the boxes in the organizations architecture diagrams?",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You understand our Tech direction and apply it to plan and deliver your work and to give feedback.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You consistently align your work with our Tech direction and promptly highlight diversions from it.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You are responsible for aligning the software and systems in your team to the overall technical strategy, making tradeoffs where appropriate in consultation with more senior engineers.",
          "You actively promote the technical strategy within your team.",
          "You may contribute to the definition of the medium-to-long term technical strategy.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You are accountable for aligning the software and systems in your area to the overall technical strategy, making tradeoffs where appropriate in consultation with more senior engineers.",
          "You help to shape the technical strategy and actively promote it within your organization.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "You partner with the ProdTech leadership to define the long term vision that factors in both a deep understanding of what is happening in the business and in the market as well as the technical limitations and possibilities of Lepaya's software and systems.",
          "You find new and creative ways of leveraging customer insights and including customer voices to influence strategy.",
        ],
        examples: ["to de added"],
      },
    ],
  },

  CODE_FLUENCY: {
    displayName: "Code Fluency",
    category: "B",
    description: "The ability to read and write code fluently and well.",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You translate ideas into correct and readable code.",
          "You understand that the responsibility of code readability resides with the author, and you prioritize simplicity unless performance improvements justify complexity based on data.",
          "You are able to reproduce and adapt existing code in different contexts, generalizing concepts instead of just copying and pasting.",
          "Your code is free of glaring errors, with bugs typically found in edge cases or design rather than mainline paths. It is well documented, well tested, and you balance the use of manual and automated tests based on project needs.",
          "You participate in code reviews, engage in the reconciliation of different opinions, actively question to learn the codebase and technologies, and follow best practices established by others.",
          "You deliver code in alignment with our technical direction, ensuring it contributes productively to the broader project.",
          "You are learning to navigate through your team's codebases, debug code effectively, and to understand the third-party libraries, platforms, and systems you rely on. With support, you can make good use of them.",
          "You are learning the industry's best practices for your development environment, including best practices in key frameworks relevant to your specialization (e.g., React for frontend development, NestJS for backend development).",
          "You are learning practices for managing and accessing data structures, such as using SQL or DynamoDB for backend operations and retrieving data from APIs and caching for frontend tasks.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You write code that captures the essential nature of the solution and is appropriately flexible, reusable, efficient, and adaptable to changing requirements.",
          "You ensure high code quality in code reviews. You adopt approaches (e.g., apply best practices and coding standards, help resolve differences of opinions) to foster an effective/collaborative code review culture.",
          "You avoid reinventing the wheel by leveraging other Lepaya solutions or off-the-shelf solutions with the possible trade-off in mind.",
          "You achieve high throughput in coding tasks while maintaining appropriately high quality.",
          "You are able to comfortably and independently navigate through large codebases efficiently, debug code effectively, and understand the third-party libraries, platforms, and systems you rely on.",
          "You are well-versed in the industry's best practices for your development environment, including expertise in key frameworks relevant to your specialization (e.g., React for frontend development, NestJS for backend development).",
          "You apply best practices for managing and accessing data structures, such as using SQL or DynamoDB for backend operations and retrieving data from APIs and caching for frontend tasks.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You look for ways to simplify code and infrastructure. You prioritize tasks that lead to lower system and infrastructure maintenance and migration costs with meaningful and measurable impact.",
          "You can find ways to improve developer efficiency as measured by cycle time, ramp-up time, or other similar measurements.",
          "You write libraries and modules that can be extended and adopted by other teams at Lepaya to increase their efficiency.",
          "You have a strong awareness of the ecosystem of tools and libraries supporting your primary programming language and development environment and a strong grasp of the idioms and patterns of your language.",
          "You are proficient in the industry's best practices for your development environment, including deep expertise in key frameworks relevant to your specialization (e.g., React for frontend development, NestJS for backend development).",
          "You are proficient in managing and accessing data structures, such as using SQL or DynamoDB for backend operations and retrieving data from APIs and caching for frontend tasks.",
          "You have a T-shaped or W-shaped skill set. You are skilled in actively addressing more complex challenges across different aspects of the stack. For backend developers, this may mean comfortably managing advanced frontend, databases and infrastructure tasks.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "The expectations for code fluency do not go beyond IC5 (though some specialist may go deep in this area)",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "The expectations for code fluency do not go beyond IC5 (though some specialist may go deep in this area)",
        ],
        examples: ["to de added"],
      },
    ],
  },

  SOFTWARE_DESIGN: {
    displayName: "Software Design",
    category: "B",
    description:
      "The ability to design software components with reasonable APIs and interaction patterns (writing good classes, modules, etc - building out a box in your architecture diagram).",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You are able to understand the existing designs and technology choices within your team's domain, and you make appropriate adjustments to existing designs when necessary.",
          "You write code modules that exhibit good separation of concerns and well-defined boundaries.",
          "You are learning the ecosystem of tools and libraries supporting your primary programming language and development environment and a good knowledge of the idioms and patterns of your language.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You are able to independently design software components in well-scoped scenarios, with maintenance as key consideration. Your components are testable, debuggable, and have logical APIs that are not easily misused.",
          "You have a strong grasp of the libraries, platforms, and systems that you rely on, allowing you to apply them expertly.",
          "You know industry best practices for your primary programming language (e.g.: for backend engineers, object oriented programming, design patterns and SOLID principles).",
          "You don't increase toil and tech debt unintentionally.",
          "You are well-versed in the ecosystem of tools and libraries supporting your primary programming language and development environment and a good knowledge of the idioms and patterns of your language.",
          "You are developing a T-shaped skill set by handling straightforward tasks in related areas confidently. If you primarily work in backend development, for example, you're also able to manage front-end tasks and handle basic infrastructure issues as needed.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You are responsible for designing the software or systems required in your area of ownership and ensuring that they meet their design objectives.",
          "You are able to give quality feedback on designs written by other members of your team, asking probing, insightful questions that solidify choices and surface erroneous assumptions.",
          "You effectively and quickly debug cross-module issues, and may intuit where bugs might lie due to your deep knowledge of the libraries, platforms, and systems that your software relies on.",
          "You anticipate future use cases and make design decisions that minimize the cost of future changes. You are able to successfully balance between YAGNI and over simplifying.",
          "When designing software, you consciously manage technical debt.",
          "You know when to make refactors, smaller code tidings and when it’s better to leave things as-is.",
          "You are proficient in industry best practices for your main programming languages (e.g.: for backend: object oriented programming, design patterns and SOLID principles).",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You design software components that are difficult to misuse and flexible in the face of an increase in the number of adjacent use cases as appropriate to the direction of the business (neither under nor over-designed).",
          "You reduce complex designs and concepts to simple foundational components through correct choices of data structures, applications of algorithms, or other deep insight into the problem space and create simple interfaces to complex underlying systems.",
          "You are able to review designs in related areas with high quality and ensure quality for cross-team cross-module design/API issues.",
          "You have deep expertise in implementation or principles behind some of the libraries, platforms, and systems relevant to your team's work.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: ["Same as previous"],
        examples: ["to de added"],
      },
    ],
  },

  ARCHITECTURE_DESIGN: {
    displayName: "Architecture Design",
    category: "B",
    description:
      "The ability to design systems of interacting components - e.g. a collection of interacting features or the architecture of a product, binary or significant service (what are the boxes in your architecture diagram, how do they interact).",
    milestones: [
      {
        summary: "IC3",
        signals: [
          "You understand the most important architectural components of your team's domain",
          "You are able to mindfully reproduce patterns and use existing abstractions and components in our codebases to architect solutions for simple problems",
          "You are able to decompose a simple problem or business scenario into a solution composed of multiple software components interacting with each other",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC4",
        signals: [
          "You have a good grasp of the architectural patterns and components of your team's domain.",
          "You are able to understand the breakdown and responsibilities of multiple software components interacting with each other.",
          "You proactively identify issues with technical dependencies of your project that are owned by other teams and surface them.",
          "You notice and avoid architectural deviations within your team, validating with a more experienced engineer, when necessary.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC5",
        signals: [
          "You make correct technology suggestions for components needed as part of a larger architecture, including making build vs. buy choices for specific components and choosing frameworks.",
          "You architect services and systems using well accepted patterns to allow for iterative, autonomous development and future scaling.",
          "You are able to create coherent designs with multiple components interacting across API or system boundaries; bugs do not creep in at the boundaries between components due to mismatches in expectations of what is technically feasible.",
          "You are capable of rolling out a component or major feature (and deprecating an existing system or feature) reliably.",
          "You avoid introducing toil and future maintenance work by proactively avoiding scaling issues and providing adequate documentation.",
          "You independently and preemptively identify and resolve technical risks or deviations before they jeopardize the project. You resolve cross-team dependencies earlier to ensure the successful execution of the project.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC6",
        signals: [
          "You make correct technology choices for components needed as part of a larger architecture, including recommending build vs. buy approaches for specific components and choosing frameworks.",
          "You are capable of owning the overall health and engineering quality of a system or collection of features—for example, driving regular health reviews, curating test strategy, etc.—and ensuring that the health and maintenance of your systems do not depend on the maintainers having your expertise.",
          "You are capable of driving the overall testing strategy of a significant system with high reliability or quality requirements.",
          "You are capable of designing systems with significant ambiguity and/or lots of systems that depend on it.",
        ],
        examples: ["to de added"],
      },
      {
        summary: "IC7",
        signals: [
          "You can design systems that require research on what is possible rather than relying on past experience, and where, consequently, a significant portion of the challenge is designing an appropriately staged validation plan.",
          "You define the high-level systems that need to be built to meet strategic objectives.",
          "You are accountable for the successful holistic technical architecture of the organization.",
        ],
        examples: ["to de added"],
      },
    ],
  },
};

export const trackIds: TrackId[] = Object.keys(tracks);

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map();
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    );
  });
  return Array.from(categoryIds.values()).map((categoryId) => ({
    categoryId,
    points: pointsByCategory.get(categoryId) || 0,
  }));
};

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map((trackId) => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#00abc2", "#428af6", "#e1439f", "#e54552"]);

export const titles = [
  { label: "Software Engineer III", minPoints: 0, maxPoints: 16 },
  { label: "Software Engineer IV", minPoints: 17, maxPoints: 35 },
  { label: "Software Engineer V", minPoints: 36, maxPoints: 57 },
  { label: "Staff Engineer", minPoints: 58, maxPoints: 89 },
  { label: "Principal Engineer", minPoints: 90 },
];

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles
    .filter(
      (title) =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map((title) => title.label);
};
