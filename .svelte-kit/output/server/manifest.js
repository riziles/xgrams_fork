export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["clack.mp3","click.mp3","ding.wav","failed.mp3","favicon.png","robots.txt","tng_transporter9.mp3"]),
	mimeTypes: {".mp3":"audio/mpeg",".wav":"audio/wav",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2d4bf21b.js","imports":["_app/immutable/entry/start.2d4bf21b.js","_app/immutable/chunks/index.858362d9.js","_app/immutable/chunks/singletons.fabd5b61.js","_app/immutable/chunks/index.7b606f8f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.fe01b0cd.js","imports":["_app/immutable/entry/app.fe01b0cd.js","_app/immutable/chunks/index.858362d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
