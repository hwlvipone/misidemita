// types.ts

export interface Build {
  id: string
  name: string
  version: number
  skills: SelectedSkill[]
  createdAt: string
  updatedAt: string
}

export interface SelectedSkill {
  id: number
  name: string
  type: string
  Description: string | null
  Effects: string | null
  Tags: string
  supports: Support[]
}

export interface SkillExtension {
  Name: string
  Type: string
  Tags: string
  Description: string | null
  Effects: string | null
}

export type ExtendedSelectedSkill = SelectedSkill & SkillExtension

export interface Support {
  id: number
  Name: string
  Type: string
  Tags: string
  Description: string | null
  Effects: string | null
}

export interface Skill {
  id: number
  Name: string
  Type: string
  Tags: string
  Description: string | null
  Effects: string | null
}