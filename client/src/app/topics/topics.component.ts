import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsComponent implements OnInit {
  topics$?: Observable<any[]>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.topics$ = this.gameService.getTopics();
  }

}
