import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTk3ZGQ0ZjJmYWU1MGZhMzU4ZjE0OWZiMTQzNDYxN2UyNmVlYjM3NjY0YmVlNTZhMTNkMTY2ZTYzZDk0MjNkMTkzMzlkOWUyOTNiZmE0YzQiLCJpYXQiOjE2NjcxODc0NTguNzg0MjU1LCJuYmYiOjE2NjcxODc0NTguNzg0MjU4LCJleHAiOjE2ODI5MTIyNTguMzE1NTM5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.L8sbn5-dt7LYT5dO2lqB60--1thFH4nRaHEu-8Q88gopyL6m1eDx70hxKQDiaEj40pEI4d1_r5NKa-PYwTVj3ptMroQDBFtoe0GBjcIJm6Uii2TRDFn7PuqFVtiKRmDlHtkbE-Ciq6aMJxAfkkGohJHhuMmcF9vO9oBF_p0EF5Vbu28-k5UfZmxAd8iohGDWLU_F_UcqBbd0cq3BFao_zDmRgkZRsSVVb1OtkDW300iMFYUwdGBWtXzREUVh_UZ1CHd-jb7B5lZLARqhuJRCPJnWPROr-CkkcaHDX8JXvjVMo206jyiaK8C2S3LkXHmt9OfI0wy6nlKr6wSjPNU93_4mU0QUUGLWOU6rihwYhAepZp1N6Unpf1lVKEIsJrbamDV6s4UaFV803HdLzyunlmApCz-40NbziMNkvLxi6-FayB8GIgs6hMveslD_HGqAdkDOjECEV10gqYgu1x3JKt8jXppGJeuMCHZo3o_Lr_qYskxCrvgZqmpKz7n2eVjTAhnnyR75uovkEBz1lNiYagp3KCOn61_8nNLXJxpgSIVqqDqcjxVGM4dBI8zmmj60Qfj6xu3hLXjnS4_EFHmyxmlDgh3Y4OG_JncVZNvZ1HC9WRIcdskZqt8TkB_Yq4k03qVP3cjwGulLX-pcTFqn-tB_IPWgkhWsBYUx9-YPEcY"

  const times = {
    time: [
      "08:00:00 - 12:00:00 - 1",
      "12:00:00 - 16:00:00 - 1",
      "16:00:00 - 20:00:00 - 1",
    ]
  }

  // const addCalender = () => {
  //   axios.post("https://api-booking-baber.up.railway.app/api/staff-times/store" , time ,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //     )
  //     .then((data) => {
  //       console.log(data.config);
  //     })
  // }

  const time = {
    times: [
      "08:00:00 - 12:00:00",
      "12:00:00 - 16:00:00",
      "16:00:00 - 20:00:00",
    ],
    day: "2022-07-12"
  }

  const addCalender = () => {
    axios.post("https://api-booking-baber.up.railway.app/api/staff-times/store", time,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((data) => {
        console.log(data.config);
      })
  }

  const callapi = () => {
    // times = [
    //   time
    // ]

    axios.get("https://api-booking-baber.up.railway.app/api/staff-times",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        const times = {
          "times": data.data.data,
          "status":1
        }
        const status = 1
        axios.post("https://api-booking-baber.up.railway.app/api/staff-times/update-status",times, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      })
  }



  return (
    <div className="App">
      <p onClick={() => callapi()}>Xem</p>
      <p onClick={() => addCalender()}>thêm thời gian</p>
    </div>
  );
}

export default App;
