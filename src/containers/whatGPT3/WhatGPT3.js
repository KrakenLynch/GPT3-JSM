import React from 'react'
import { Feature } from '../../components/index'
import './whatGPT3_styles.css'

const WhatGPT3 = () => {
  const title_text =
    'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
  const chat_text =
    'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
  const knowledge_text =
    'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
  const education_text =
    'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text={title_text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text={chat_text} />
        <Feature title="Knowledgebase" text={knowledge_text} />
        <Feature title="Education" text={education_text} />
      </div>
    </div>
  )
}

export default WhatGPT3
