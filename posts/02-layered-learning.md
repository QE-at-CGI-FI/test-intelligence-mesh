# Skills, Combos, Chains: How the Learning Works

Learning to drive doesn't start with highway merging. It starts with the clutch.

Not because the clutch is the most important part — it isn't, really. But because you can't change gears before you know how to disengage the engine. And you can't read traffic, signal, steer, and work the clutch simultaneously until each of those is so practiced it's no longer competing for your attention.

This is how we think about learning AI skills for quality engineering. Not as a curriculum to complete. Not as a hierarchy to climb. As mechanics to practice — one at a time, in combination when you're ready, at speed when *you* say so.

## The unit of learning is a move, not a level

In this mesh, each agent is a skill — one learnable move with standalone value.

The Test Scenario Explorer is a move. The Bug Report Enhancer is a move. They each do one thing clearly and well. You can pick up either one without knowing the other exists.

This matters because the point of a "level" isn't to gate you. It's to tell you the shape of the skill: is this one you can practice alone, or does it work better when you've already got another skill in your hands?

- **L1 — Solo:** Practice alone. No prerequisites. The skill is complete by itself.
- **L2 — Combo:** Can be used alone, but unlocks something greater when paired with an L1 skill you've already internalized.
- **L3 — Chain:** Designed to fit into a sequence. Most powerful when several other moves are already automatic.

The clutch is L1. Gear-changing is L2. Motorway driving is L3.

## Combos are where the mesh forms

The mesh isn't made of individual agents. It's made of the connections between them.

When you've practiced the Test Scenario Explorer enough that you trust your own evaluation of its output — that's when the combo becomes available. You run the scenario explorer, then hand its output directly to the Test Code Generator. Two moves in sequence: the output of the first becomes the input of the second.

That's a combo. You couldn't have done it well before you'd practiced each move alone. Trying to run the combo without solo practice first produces the driving equivalent of stalling on a hill: technically you pressed the right pedals, but nothing is moving.

The agents page shows every agent's natural pairings. These aren't mandatory. They're suggestions based on what makes the combo mechanically sound.

## Speed comes from practice, not permission

Here's the part most AI learning approaches get wrong: they tie progression to a sequence you're told to follow, or to a certification, or to a number of uses.

Speed doesn't come from permission. It comes from practice.

You'll know you're speed-ready when:
- You can tell a good output from a weak one without thinking about it
- You know exactly which follow-up prompt to use when the first response misses
- The skill stops feeling like a tool you use and starts feeling like a reflex

At that point — not before, not because someone told you to — you pick up the next skill.

And every time you pick up a new skill, you start at L1. Not because your previous skills were lost, but because the new one needs solo practice before it becomes combinable.

## The skills transfer across tools

Every skill in this mesh has instructions for both GitHub Copilot and Claude Code. The mechanic is the same. The controls are slightly different — like driving a manual versus an automatic.

Practicing a skill in Copilot and then moving to Claude Code isn't starting over. It's remapping a skill you already have to a slightly different interface. The transfer is fast because the underlying move is already internalized.

This also means you can start with whichever tool you already have open. The skill is portable.

## Where to start

Pick one L1 skill. Use it on real work — not a demo, not a tutorial, something from your actual current project.

Before you run the agent, make a prediction: what will it produce? Then compare.

The gap between your prediction and the output is where the learning is. Sometimes the agent finds things you missed. Sometimes you catch things the agent missed. Both are important data about where your judgment adds value — and where AI accelerates you.

When that gap feels familiar — when you can predict the output before you see it, and you know exactly how to improve it — that's when you add the combo.
