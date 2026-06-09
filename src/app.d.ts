// See https://svelte.dev/docs/kit/types#app.d.ts for information about these
// ambient declarations that describe app-wide types to TypeScript.
declare global {
	namespace App {
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
	}
}

export {};
