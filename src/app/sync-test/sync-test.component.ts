import { Component, OnInit } from '@angular/core';
import { Client as ChatClient } from 'twilio-chat';
import { Channel } from 'twilio-chat/lib/channel';
import { Message } from 'twilio-chat/lib/message';
import { KeyValue } from '@angular/common';

import { SyncClient, SyncList, SyncListItem } from 'twilio-sync';

@Component({
  selector: 'app-sync-test',
  templateUrl: './sync-test.component.html',
  styleUrls: ['./sync-test.component.css']
})
export class SyncTestComponent implements OnInit {

  syncClient: SyncClient | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initSyncClient('testToken');
  }

  initSyncClient(token: string){
    this.syncClient = new SyncClient(token);
  }

}
