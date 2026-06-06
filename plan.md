# Comparison Plan: Rambda vs Remeda TypeScript Typings

## Objective
Identify methods in Rambda where TypeScript typings are less precise or less ergonomic than in Remeda, and demonstrate these differences using test cases.

## Selected Candidate Methods
Based on initial research, the following methods are candidates for comparison:

1. **`map`**:
   - **Remeda**: Preserves tuple length and structure; preserves `readonly` status.
   - **Rambda**: Often collapses tuples to arrays; forces mutability in output.

2. **`indexBy`**:
   - **Remeda**: Supports literal keys and return `Partial` records for safety.
   - **Rambda**: Returns `Record<string, T>`, losing key literal information and implying all keys exist.

3. **`filter`**:
   - **Remeda**: Strong support for type guards and complex predicate narrowing, especially in `pipe`.
   - **Rambda**: Has type guard support but might have edge cases with `Boolean` constructor and deep pipes.

4. **`pick` / `omit`**:
   - **Remeda**: Strict key checking and excellent inference in data-first usage.
   - **Rambda**: Uses complex path-based typings which can sometimes be brittle.

## Investigation Steps

### Phase 1: Environment Setup
- Ensure `remeda` is available for typing comparisons (or copy relevant type definitions).
- Create a comparison test suite (e.g., `source/remeda-comparison-spec.ts`).

### Phase 2: Empirical Testing
For each selected method:
1. Write a test case using **Rambda** that demonstrates a typing limitation (e.g., losing tuple length).
2. Write an equivalent test case using **Remeda** (or its types) that succeeds in the same scenario.
3. Use `expectTypeOf` to document the exact differences.

### Phase 3: Analysis and Reporting
- Summarize findings for each method.
- Propose specific typing improvements for Rambda based on Remeda's approach.
- Prove that the proposed types (if applicable) fix the issues.

## Expected Outcomes
- A new test file `source/remeda-comparison-spec.ts` demonstrating the findings.
- A detailed report of better typings found in Remeda.
