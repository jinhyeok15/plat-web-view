'use client'

import { useKakaoLocalApi, SearchAddressResponse } from '@modules/kakao-local'
import Button from '@plat-ui/Button'
import TextField from '@plat-ui/TextField'
import { usePromotionApi } from '@plat/promotion/apiClient'
import { useState, ChangeEvent, FormEvent } from 'react'

const MarketForm = () => {
  const api = usePromotionApi()
  const kakaoLocalApi = useKakaoLocalApi()

  const [formValue, setFormValue] = useState({
    name: '',
    addr: '',
    detail_addr: '',
    images: [] as File[],
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormValue({ ...formValue, images: Array.from(e.target.files) })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', formValue.name)
    formData.append('addr', formValue.addr)

    const res = await kakaoLocalApi.fetch('/search/address.json', 'GET', {
      query: {
        query: formValue.addr,
      },
    })
    const { documents } = (await res.json()) as SearchAddressResponse
    if (!documents.length) {
      return alert('주소를 찾을 수 없습니다.')
    }

    const { x, y, address } = documents[0]

    formData.append('lng', x)
    formData.append('lat', y)

    formData.append(
      'division_addr',
      [
        address.region_1depth_name,
        address.region_2depth_name,
        address.region_3depth_name,
      ].join(' '),
    )

    formData.append('detail_addr', formValue.detail_addr)

    formValue.images.forEach((image, index) => {
      formData.append(`images[${index}]`, image)
    })

    try {
      const response = await api.fetch('/promotions/market', 'POST', {
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return alert('등록에 성공하였습니다.')
    } catch (error) {
      console.error('Error submitting the form', error)
      return alert('등록에 실패하였습니다.')
    }
  }

  return (
    <form className="flex flex-col space-y-4 p-6" onSubmit={handleSubmit}>
      <TextField
        label="매장명"
        type="text"
        name="name"
        value={formValue.name}
        onChange={handleChange}
      />
      <TextField
        label="도로명주소"
        type="text"
        name="addr"
        value={formValue.addr}
        onChange={handleChange}
      />
      <TextField
        label="상세주소"
        type="text"
        name="detail_addr"
        value={formValue.detail_addr}
        onChange={handleChange}
      />
      <div>
        <label>
          이미지 등록:
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <Button className="mt-6" type="submit">
        등록하기
      </Button>
    </form>
  )
}

export default MarketForm
