import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["clack.mp3","click.mp3","ding.wav","failed.mp3","favicon.png","robots.txt","tng_transporter9.mp3"]),
	mimeTypes: {".mp3":"audio/mpeg",".wav":"audio/wav",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.04d5fa6e.js","imports":["_app/immutable/entry/start.04d5fa6e.js","_app/immutable/chunks/index.858362d9.js","_app/immutable/chunks/singletons.d61903f1.js","_app/immutable/chunks/index.7b606f8f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.97f44a6e.js","imports":["_app/immutable/entry/app.97f44a6e.js","_app/immutable/chunks/index.858362d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
