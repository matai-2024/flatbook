export interface Chore {
  flatId: string
  description: string
  deadline: string
  priority: number
  timestamp: string
}

export interface ChoreDB extends Chore {}
