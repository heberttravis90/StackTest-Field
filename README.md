# StackTest Pro v0.5 — EPA Method Selector

## Core change
Jobs are now built around the EPA methods selected for that project.

1. Create/open the job.
2. Tap **Choose EPA Methods**.
3. Select every method planned for the test.
4. StackTest Pro builds the active method workspace around those selections.

## Method behavior
Methods with current calculators open directly into their dedicated calculation screen.

Current dedicated calculators/workflows include:
- Method 1
- Method 2
- Method 3A
- Method 4
- Method 5
- Method 6C / 7E / 10 shared analyzer QA
- Method 19 emissions comparison
- Method 25A
- Method 320
- RATA

Other listed EPA stack-test methods currently open a dedicated **Method Workspace** for:
- Prelim/source information
- Equipment/setup notes
- Field data/run notes
- QA/QC and post-run notes

Those workspaces are intentionally labeled as not-yet-validated calculation modules. This allows the full EPA method catalog to be used for job organization without pretending unfinished calculations are compliance-ready.

## Goal
Selecting a method should eventually surface everything needed for that method:
- Prelim inputs
- Equipment checklist
- Calibration / QA requirements
- Field data entry
- Calculations
- Run validity
- Samples / chain of custody
- Post-run QA
- Final results and reporting

## Regulatory status
Beta only. Method-specific calculations and acceptance criteria must be validated against the promulgated method, applicable subpart, approved protocol, and known datasets before compliance reliance.
