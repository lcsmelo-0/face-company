export interface UserResponse {
  id: number
  name: string
  username: string
  email: string
  company: {
    name: string
  }
}
