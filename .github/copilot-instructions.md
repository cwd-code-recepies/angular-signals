1. Use Standalone Components
- Prefer standalone components over NgModules where possible
- Use bootstrapApplication instead of NgModule bootstrapping
- Leverage component-level imports for better tree-shaking


2. Embrace Signals
- Use signals for reactive state management (`signal()`, `computed()`, `effect()`)
- Replace BehaviorSubject/Observable patterns with signals where appropriate
- Use `toSignal()` and `toObservable()` for interop with RxJS when needed

3. Performance Optimization
- Use built-in control flow syntax (`@if`, `@for`, `@switch`) instead of structural directives
- Leverage pure pipes for data transformations
- Use `trackBy` with `@for` loops

4. Dependency Injection
- Use providedIn: 'root' for singleton services
- Implement hierarchical injector pattern when needed
- Use inject() function instead of constructor injection

5. Application Architecture
- Modern Angular Standalone-First Structure Tutorial
- Implement smart/presentational component pattern
- Use TypeScript strict mode
- Maintain consistent naming conventions
- Always separate component code into distinct files:
  * `.ts` for component logic
  * `.html` for templates
  * `.css` for styles
- Avoid inline templates and styles
- Prefere Tailwind over writing custom css!

6. API Communication
- Use HttpClient with typed responses
- Implement proper error handling
- Consider using inject(HttpClient) instead of constructor injection

7. Forms
- Prefer Reactive Forms over Template-driven forms
- Use typed forms with FormBuilder
- Implement proper validation strategies

8. Testing
- Write unit tests using Jest or Karma
- Implement component testing with proper isolation
- Use test doubles (spies, stubs) appropriately

9. State Management
- For simple state, use signals
- For complex state, consider NgRx or similar solutions
- Implement proper state immutability

10. Development Tools
- Implement proper logging strategy
- Use ESLint with recommended Angular rules