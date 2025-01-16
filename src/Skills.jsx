import React from 'react'

import node from './assets/node.png'
import react from './assets/react.png'
import js from './assets/js.svg'
import html from './assets/html.svg'
import css from './assets/css.svg'
import aws from './assets/aws.svg'
import express from './assets/express.svg'
import figma from './assets/figma.svg'
import git from './assets/git.svg'
import github from './assets/github.svg'
import mongodb from './assets/mongodb.png'
import next from './assets/next.svg'
import npm from './assets/npm.png'
import sql from './assets/sql.png'
import tailwind from './assets/tailwind.svg'
import ts from './assets/ts.svg'
import vscode from './assets/vscode.svg'
import postman from './assets/postman.svg'

function Skills() {
  const icons = [node, react, express, next, js, ts, html, css, tailwind, mongodb, sql, npm, git, github, figma, vscode,postman, aws];

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Skills</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-3 sm:gap-x-20 gap-y-2 sm:gap-y-8">
        {icons.map((icon, index) => (
          <div key={index} className="bg-white shadow-sm sm:shadow-md rounded-lg p-2 sm:p-4 flex items-center justify-center">
            <img src={icon} alt={`Icon ${index + 1}`} className="w-8 h-8 sm:w-12 sm:h-12"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills