import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { AnnouncementData } from '../../types/Announcement'

export default function useCreateannouncement(id: string) {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (announcement: AnnouncementData) => {
      await request.post(`/api/v1/announcements/${id}`).send(announcement)
    },
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ['announcements'] })
    },
  })
}
