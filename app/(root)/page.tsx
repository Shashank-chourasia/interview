import InterviewCard from '@/Components/InterviewCard'
import { Button } from '@/Components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered practice & Feedback</h2>
          <p className="text-lg">Practice on real interview questions & get instant feedback</p>
          <Button asChild className="btn-primary max-sw:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-img-dude" width={400} height={400} className="max-sm:hidden" />

      </section>



      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>



      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>

        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>

      </section>
    </>
  )
}

export default page