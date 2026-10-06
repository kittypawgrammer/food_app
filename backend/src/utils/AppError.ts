// Throw this from anywhere: throw new AppError(404, 'Restaurant not found')
export class AppError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}
