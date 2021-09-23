export interface UserType {
  id: number
  name: string
}

export interface UserResType {
  user: UserType
  message: string
  success: boolean
}
