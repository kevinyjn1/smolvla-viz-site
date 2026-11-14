# Inside SmolVLA

A 3D walkthrough of one forward pass of a fine-tuned [SmolVLA](https://huggingface.co/lerobot/smolvla_base) robot
policy, with the real numbers at every step: from two camera pictures, through the vision-language model and the
action expert, to 5 seconds of joint angles for a Unitree D1 arm.

**Open it: https://kevinyjn1.github.io/smolvla-viz-site/**

- 31 steps in 10 chapters. Drag to turn, scroll to zoom, point at a cell to see its value and where it came from.
- Every colored cell is a value captured from one run of the model on one frame of a demonstration.
- A layer slider walks through both stacks of 16 layers, and a menu picks single attention heads: some look almost
  entirely at the bin, the gripper or the cube.

This repository holds only the built site. It is built with [three.js](https://threejs.org).
