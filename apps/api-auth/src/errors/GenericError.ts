class GenericError extends Error {
  type: string

  status: number

  constructor(status: number, message: string, type = 'GenericError') {
    super(message)
    this.type = type
    this.status = status
  }
}

export { GenericError }
