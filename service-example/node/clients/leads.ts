import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Leads extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://iodno295ed.execute-api.us-west-2.amazonaws.com', context, options)
  }

  public async getLeads(): Promise<any> {
    return this.http.get("/clientes", {
      metric: 'status-get',
    })
  }

  public async updateLead(lead:any): Promise<any> {
    return this.http.put("/clientes",lead, {
      metric: 'status-get',
    })
  }
}
