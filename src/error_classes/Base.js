// Here is the base error classes to extend from

class ApplicationError extends Error {
  get name() {
    return this.constructor.name;
  }
}
export { ApplicationError };
