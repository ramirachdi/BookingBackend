import { Controller, Sse, UseGuards } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CurrentUser } from 'src/decorators/user.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/users/entities/user.entity';




@UseGuards(JwtGuard)
@Controller('sse')
export class SseController {
    constructor(private readonly eventEmitter: EventEmitter2) { }

    @Sse()
    sse(@CurrentUser() SubscribedUser: User): Observable<MessageEvent> {
        const reservation_confirmed$ = fromEvent(this.eventEmitter, 'reservation.created');
        const reservation_cancelled$ = fromEvent(this.eventEmitter, 'reservation.deleted');

        return merge(reservation_confirmed$, reservation_cancelled$).pipe(
            map((payload) => {
                const { reservation, user, listing } = payload;
                const notification = true;
                if (SubscribedUser.id === { listing.host }) {
                    return ({ data: { notification } });

                }
                if (payload['userId'] === SubscribedUser.id) {
                    return ({ data: { notification } });
                }

            }),
        );
    }
}