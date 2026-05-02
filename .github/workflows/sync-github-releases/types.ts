export type Release = {
  id: number
  tag_name: string
  body: string | null
}
export type ReleaseSections = Record<string, string>
export type ReleaseCreateInput = {
  tag_name: string
  target_commitish: string
  name: string
  body: string
}
export type ReleaseUpdateInput = {
  release_id: number
  tag_name: string
  body: string
}
