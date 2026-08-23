# StackTest Pro v0.6 — Job Prep Workflow

StackTest Pro is now organized around the way a stack test is actually prepared.

## Main workflow

1. Enter the job/client/source information.
2. Type the EPA methods being performed, for example:

   `1, 2, 3A, 4, 5, 7E, 10, 25A, 320`

3. Press **Add Methods** or browse the EPA method list.
4. Press **Build Job Prep**.
5. StackTest Pro generates a preparation package for every selected method.
6. Use the generated master mobilization checklist before leaving.
7. Carry the same selected methods into Field Test, Compare, and Post-Job.

## Generated method prep

Each selected method gets a prep card containing:

- Preliminary information needed
- Method-specific equipment and supplies
- Setup / before-testing requirements
- Field / post-run reminders
- Preliminary calculations where currently supported

Examples include:

- Method 1 geometry / site information
- Method 2 flow inputs
- Method 4 moisture setup
- Method 5 isokinetic train, ice chest, nozzle planning, run volume
- Method 7E NOx analyzer setup / calibration gas planning
- Method 19 NOx lb/MMBtu prelim comparison
- Method 25A FID setup
- Method 26A isokinetic halide train
- Method 29 metals train
- Method 202 condensable PM setup
- Method 320 FTIR setup, dew-point / heated-line planning
- RATA coordination and paired-run planning

## Master mobilization

Equipment from every selected method is automatically combined into one checklist. Duplicate items are removed.

This is intended to answer one practical question before the crew leaves:

**Do we have everything needed to perform the methods on this job?**

## Preliminary calculations

The Job Prep page retains the original preliminary data workflow, including:

- Stack geometry
- Expected velocity and flow
- ACFM / DSCFM planning
- Moisture
- O₂ / CO₂
- Molecular weight
- Preliminary isokinetic nozzle size
- Target dry standard sample volume
- Analyzer concentration vs span
- Method 19 NOx lb/MMBtu
- Permit margin
- FTIR heated-line temperature margin

## Important

StackTest Pro remains a beta planning and calculation aid. The promulgated EPA method, applicable subpart, approved test protocol, permit, and company QA/QC requirements always control. Method-specific calculations require validation against known datasets before compliance reliance.
