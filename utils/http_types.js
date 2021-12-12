class ResponseError extends Error {
  /**
   * ResponseError constructor
   * @param {number} status
   * @param {string} message
   */
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  get json() {
    return {
      error: true,
      message: this.message,
    };
  }
}

class Response {
  /**
   * Response constructor
   * @param {number} status
   * @param {{[key: string]: any}} data
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
    this.responseError = true;
  }

  get json() {
    return {
      error: false,
      data: this.data,
    };
  }
}

export {ResponseError, Response};
