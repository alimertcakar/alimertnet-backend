'use strict'

import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
// const Model = use('Model')

class PortfolioItem extends BaseModel {
  @column()
  public portfolioName: string
}

module.exports = PortfolioItem
