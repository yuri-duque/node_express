class NotFoundException extends Error {
  name;
  status;

  constructor(message) {
    super(message);
    this.name = "MyError";
    this.status = 404;
  }
}
