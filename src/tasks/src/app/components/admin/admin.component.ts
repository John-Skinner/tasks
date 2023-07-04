import {Component} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  requestPending=false;
  private port=4312;
  private makeProxyEndPoint(endPoint:string):string {
    let home= window.location;
    let origin = home.hostname;
    return 'http://' + origin + ':' + this.port + endPoint;
  }
  private getInputValueString(event:Event):string {
    let element = event.target as HTMLInputElement;
    return element.value;
  }
  async issueCommand(e:Event) {
    let cmd=this.getInputValueString(e);
    this.requestPending = true;
    let cmdRequest = {
      cmd:cmd
    }
    let bodyText = JSON.stringify(cmdRequest);

    console.log(`start issue cmd:${bodyText}`);
    try
    {
      await fetch(this.makeProxyEndPoint('/exec'),
          {
            method: 'POST',
            body: bodyText,
            headers: new Headers({
              'content-type':'application/json'
            }),
          });
      this.requestPending=false;
    }
    catch (err) {
      console.error('admin fetch failed:'+err);
      this.requestPending=false;
    }

  }
  async adminReset() {

    try
    {
      let response = await fetch(this.makeProxyEndPoint('/reset'),
          {
            method:'POST',
          })
      let result = JSON.stringify(response,null,2);
      console.log('response returned');
      console.log(result);
      this.requestPending=false;

    }
    catch (err) {
      console.error('reset failed:'+err);
      this.requestPending=false;
    }
  }
  async get(e:Event) {
    let cmd=this.getInputValueString(e);
    this.requestPending = true;
    let cmdRequest = {
      cmd:cmd
    }
    let bodyText = JSON.stringify(cmdRequest);

    console.log(`start issue cmd:${bodyText}`);
    try
    {
      this.requestPending=true;
      await fetch(this.makeProxyEndPoint('/get'),
          {
            method: 'POST',
            body: bodyText,
            headers: new Headers({
              'content-type':'application/json'
            }),
          });
      this.requestPending=false;
    }
    catch (err) {
      console.error('admin fetch failed:'+err);
      this.requestPending=false;
    }
  }
  async run(e:Event) {
    let cmd=this.getInputValueString(e);
    this.requestPending = true;
    let cmdRequest = {
      cmd:cmd
    }
    let bodyText = JSON.stringify(cmdRequest);

    console.log(`start issue cmd:${bodyText}`);
    try
    {
      this.requestPending=true;
      await fetch(this.makeProxyEndPoint('/run'),
          {
            method: 'POST',
            body: bodyText,
            headers: new Headers({
              'content-type':'application/json'
            }),
          });
      this.requestPending=false;
    }
    catch (err) {
      console.error(' fetch failed:'+err);
      this.requestPending=false;
    }
  }
}
