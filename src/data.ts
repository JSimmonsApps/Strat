export type FurtherLearning = { type: 'video' | 'article' | 'book'; provider: string; title: string; creator?: string; url?: string; description: string };
export type Lesson = {
  id: string; title: string; duration: string; concept: string; why: string; principle: string;
  weak: string; strong: string; tryIt: string; scenario: string; tip: string; challenge: string;
  check: { question: string; options: string[]; answer: number };
  furtherLearning: FurtherLearning[];
};
export type Course = { id: string; title: string; category: string; level: string; duration: string; description: string; objectives: string[]; accent: string; lessons: Lesson[] };
export type Practice = { id: string; title: string; category: string; duration: string; description: string; prompt: string };
export type Tool = { id: string; title: string; category: string; description: string; fields: string[] };
export type Resource = { id: string; title: string; type: string; category: string; description: string; tags: string[] };

const lesson = (id: string, title: string, concept: string, principle: string, scenario: string, checkAnswer = 0): Lesson => ({
  id, title, duration: '12 min', concept, principle, scenario, check: {
    question: `Which move best supports ${title.toLowerCase()}?`,
    options: ['Name the point, then make it easy to act on.', 'Add more detail before stating the point.', 'Wait for someone else to set the direction.'],
    answer: checkAnswer,
  },
  why: 'Professional skill is visible in the moments where the stakes are real: a room goes quiet, a decision is unclear, or someone needs confidence from you. This lesson gives you a repeatable move for that moment.',
  weak: '“There are a few things we could maybe consider, and I am not sure which direction makes the most sense yet.”',
  strong: '“My recommendation is option B. It meets the deadline, and the trade-off is contained.”',
  tryIt: 'Say your point once in a single breath. Remove the warm-up sentence. Keep the reason, not the apology.',
  tip: 'Clarity is not a personality trait. It is a sequence you can rehearse: point, reason, next move.',
  challenge: 'Use this move in one live conversation today. Afterward, write down what changed in the room.',
  furtherLearning: [{ type: 'article', provider: 'Harvard Business Review', title: 'How to communicate with clarity', url: 'https://hbr.org/topic/communication', description: 'A useful source for building practical communication habits.' }],
});

export const courses: Course[] = [
  {
    id: 'speak-with-confidence', title: 'Speak With Confidence', category: 'Communication', level: 'Beginner → Intermediate', duration: '2 hr 15 min', accent: '#27b8ff',
    description: 'Build a steadier voice, sharper thinking, and the practical confidence to contribute when it matters.',
    objectives: ['State your point with structure', 'Use pace and pause to create authority', 'Respond under professional pressure'],
    lessons: [
      lesson('understanding-confidence', 'Understanding Confidence', 'Confidence is not the absence of nerves. It is the ability to keep your attention on the message while nerves are present.', 'Confidence = preparation × attention × repetition.', 'You are asked for an opinion before you feel completely ready. What do you do next?'),
      lesson('the-power-of-the-pause', 'The Power of the Pause', 'A pause gives your thinking a visible edge. It separates a considered response from a reflex.', 'Pause → choose the point → deliver the point.', 'A senior colleague challenges your recommendation in front of the group.'),
      lesson('structuring-your-thoughts', 'Structuring Your Thoughts', 'People can follow a strong idea when its shape is apparent. Give the listener the map before the detail.', 'Lead with the answer; support with two reasons; close with the next move.', 'Your manager asks for a two-minute update on a project that has slipped.'),
      lesson('speaking-with-intent', 'Speaking With Intent', 'Intent turns information into communication. Decide what you want the listener to understand, feel, or do.', 'One conversation. One outcome. One clear ask.', 'A cross-functional partner keeps postponing a decision your work depends on.'),
      lesson('putting-it-together', 'Putting It All Together', 'The most credible communicator makes the next step feel simple. Clarity, presence, and intent now work as one system.', 'Be useful before you try to be impressive.', 'You have 60 seconds to open a meeting with a decision to make.'),
    ],
  },
  {
    id: 'executive-presence', title: 'Executive Presence', category: 'Presence', level: 'Intermediate', duration: '1 hr 40 min', accent: '#23d2c0',
    description: 'A practical foundation for being read as composed, prepared, and worth listening to.',
    objectives: ['Create a grounded first impression', 'Read the room before entering it', 'Project calm authority without performance'],
    lessons: [
      lesson('arrive-with-intent', 'Arrive With Intent', 'Presence starts before you speak. Your entry, attention, and first contribution tell others how to place you.', 'Presence is what your behavior makes easy for other people.', 'You enter a meeting where the group is already tense and moving quickly.'),
      lesson('read-the-room', 'Read The Room', 'A room has a pace, a power pattern, and an unspoken question. Notice all three before adding your voice.', 'Observe the temperature before you change it.', 'Two stakeholders disagree indirectly while looking to you to move things forward.'),
      lesson('calm-under-pressure', 'Calm Under Pressure', 'Composure is a recoverable state. Use your body and your sentence structure to return to it quickly.', 'Slow the body to widen the thinking.', 'You are interrupted while presenting a recommendation you care about.'),
    ],
  },
  {
    id: 'decision-quality', title: 'Decision Quality', category: 'Thinking', level: 'Beginner → Intermediate', duration: '1 hr 30 min', accent: '#b9c5d4',
    description: 'Make cleaner decisions with imperfect information, visible assumptions, and disciplined trade-offs.',
    objectives: ['Separate facts from assumptions', 'Frame the decision before solving it', 'Choose and communicate a trade-off'],
    lessons: [
      lesson('frame-the-decision', 'Frame The Decision', 'Most slow decisions are not difficult; they are poorly framed. Name the decision, the owner, and the constraint.', 'A decision is a question with a finish line.', 'Your team is debating solutions before agreeing on the problem.'),
      lesson('separate-facts', 'Separate Facts From Assumptions', 'Assumptions are not bad. Hidden assumptions are expensive. Make them visible so the team can test them.', 'Label what you know, believe, and need to learn.', 'A launch plan relies on an unverified customer behavior.'),
      lesson('choose-the-tradeoff', 'Choose The Trade-off', 'A credible recommendation does not pretend every option is equally good. It makes the cost of choosing visible.', 'Every yes spends a no.', 'You can protect speed or scope, but not both this quarter.'),
    ],
  },
  {
    id: 'lead-through-clarity', title: 'Lead Through Clarity', category: 'Leadership', level: 'Intermediate', duration: '1 hr 50 min', accent: '#ff8a27',
    description: 'Create alignment through expectations, feedback, and decisions that people can actually execute.',
    objectives: ['Set a useful standard', 'Give feedback people can use', 'Turn ambiguity into ownership'],
    lessons: [
      lesson('the-clear-standard', 'Set The Clear Standard', 'People cannot reliably hit a standard they cannot see. Make quality observable and specific.', 'Describe the work, not the person.', 'A teammate delivers something technically complete but not ready for the audience.'),
      lesson('feedback-that-moves', 'Feedback That Moves', 'Feedback works when it connects an observed behavior to its impact and a better next move.', 'Observation → impact → next move.', 'You need to address a recurring pattern without making the person defensive.'),
    ],
  },
];

export const practices: Practice[] = [
  { id: 'condense-message', title: 'Condense your message', category: 'Communication', duration: '5 min', description: 'Turn a sprawling update into a point, two reasons, and a next step.', prompt: 'Write a message you need to deliver this week. Now rewrite it in 30 words using: point → reason → next move.' },
  { id: 'pause-respond', title: 'Pause before responding', category: 'Presence', duration: '3 min', description: 'Build a deliberate gap between pressure and your first sentence.', prompt: 'Recall a question that catches you off guard. Write the first sentence you will use to buy thinking time without sounding evasive.' },
  { id: 'facts-assumptions', title: 'Facts or assumptions?', category: 'Thinking', duration: '7 min', description: 'Make the invisible logic inside a decision visible.', prompt: 'Choose a live decision. List three facts, three assumptions, and the one unknown worth testing first.' },
  { id: 'feedback-script', title: 'The useful feedback script', category: 'Leadership', duration: '8 min', description: 'Practice feedback that is direct, specific, and actionable.', prompt: 'Write one sentence for the observed behavior, one for its impact, and one for the next move you want to see.' },
];

export const tools: Tool[] = [
  { id: 'swot', title: 'SWOT Analysis', category: 'Strategy', description: 'A fast scan of internal strengths and weaknesses against external opportunities and threats.', fields: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'] },
  { id: 'decision-matrix', title: 'Decision Matrix', category: 'Decisions', description: 'Compare options against the criteria that actually matter.', fields: ['Decision to make', 'Options', 'Criteria and weighting', 'Recommendation'] },
  { id: 'stakeholder-map', title: 'Stakeholder Map', category: 'Leadership', description: 'See who needs what, how much influence they carry, and where to focus attention.', fields: ['Stakeholders', 'Influence and interest', 'Current stance', 'Next action'] },
  { id: 'raci', title: 'RACI', category: 'Delivery', description: 'Make ownership explicit before work starts moving.', fields: ['Workstream', 'Responsible', 'Accountable', 'Consulted / Informed'] },
  { id: 'action-planner', title: 'Action Planner', category: 'Execution', description: 'Move an intention into a next action with a clear owner and date.', fields: ['Outcome', 'Next action', 'Owner', 'Due date / evidence'] },
  { id: '30-60-90', title: '30 / 60 / 90 Plan', category: 'Career', description: 'Turn a new role or priority into a staged plan with evidence of progress.', fields: ['First 30 days', 'Days 31–60', 'Days 61–90', 'Signals of success'] },
];

export const resources: Resource[] = [
  { id: 'point-reason-next', title: 'Point → Reason → Next move', type: 'Cheat sheet', category: 'Communication', description: 'A compact structure for updates, recommendations, and answers under pressure.', tags: ['clarity', 'speaking'] },
  { id: 'pause-card', title: 'The pause card', type: 'Quick reference', category: 'Presence', description: 'Three ways to create thinking space without losing authority.', tags: ['composure', 'presence'] },
  { id: 'decision-brief', title: 'One-page decision brief', type: 'Template', category: 'Thinking', description: 'Frame the decision, constraints, options, and recommendation on one page.', tags: ['decisions', 'strategy'] },
  { id: 'feedback-loop', title: 'Feedback loop', type: 'Framework', category: 'Leadership', description: 'A behavioral feedback structure designed for a next conversation, not a performance verdict.', tags: ['feedback', 'leadership'] },
  { id: 'meeting-reset', title: 'Meeting reset guide', type: 'Guide', category: 'Professional', description: 'Intervene when a meeting is drifting, overloaded, or avoiding the real decision.', tags: ['meetings', 'facilitation'] },
  { id: 'clear-writing', title: 'Clear writing checklist', type: 'Cheat sheet', category: 'Communication', description: 'Edit an email or brief for signal, structure, and a visible ask.', tags: ['writing', 'clarity'] },
];