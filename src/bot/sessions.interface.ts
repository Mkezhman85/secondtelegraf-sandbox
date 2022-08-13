import { Context, Scenes } from 'telegraf';

export interface IMySessionScene extends Scenes.SceneSessionData {
	myProps: string;
}

export interface IMySession extends Scenes.SceneSession<IMySessionScene> {
	myProp: string;
}

export interface IMyContext extends Context {
	props: string;
	session: IMySession;
	scene: Scenes.SceneContextScene<IMyContext, IMySessionScene>;
}
