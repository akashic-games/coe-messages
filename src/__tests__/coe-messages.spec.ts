/**
 * ビルドテスト
 */
import * as messages from "..";

describe("build test", () => {
	it("COEMessageTypeMap", () => {
		expect(messages.COEMessageTypeMap.SessionStarted).toBe("start");
		expect(messages.COEMessageTypeMap.SessionClosed).toBe("end");
		expect(messages.COEMessageTypeMap.ChildSessionStart).toBe("child_start");
		expect(messages.COEMessageTypeMap.ChildSessionEnd).toBe("child_end");
	});

	it("COESessionStartMessage", () => {
		const sessionStartMessage: messages.COESessionStartMessage<any> = {
			type: "start",
			parameters: {
				dummySessionId: "dummy"
			}
		};
		expect(sessionStartMessage.type).toBe("start");
		expect(sessionStartMessage.parameters).toEqual({
			dummySessionId: "dummy"
		});
	});

	it("COESessionCloseMessage", () => {
		const sessionCloseMessage: messages.COESessionCloseMessage = {
			type: "end"
		};
		expect(sessionCloseMessage.type).toBe("end");
	});

	it("COEChildSessionStartMessage", () => {
		const childSessionStartMessage: messages.COEChildSessionStartMessage = {
			type: "child_start",
			parameters: {
				sessionId: "session-id"
			}
		};
		expect(childSessionStartMessage.type).toBe("child_start");
		expect(childSessionStartMessage.parameters.sessionId).toBe("session-id");
	});

	it("COEChildSessionEndMessage", () => {
		const childSessionEndMessage: messages.COEChildSessionEndMessage = {
			type: "child_end",
			parameters: {
				sessionId: "session-id",
				result: {
					data: "hoge"
				},
				error: null
			}
		};
		expect(childSessionEndMessage.type).toBe("child_end");
		expect(childSessionEndMessage.parameters.sessionId).toBe("session-id");
		expect(childSessionEndMessage.parameters.result).toEqual({
			data: "hoge"
		});
	});

	it("ExternalMessage", () => {
		const externalMessage: messages.COEExternalMessage = {
			type: "hoge_message",
			sessionId: "session-id",
			data: {
				data: "hoge"
			}
		};
		expect(externalMessage.type).toBe("hoge_message");
		expect(externalMessage.sessionId).toBe("session-id");
		expect(externalMessage.data).toEqual({
			data: "hoge"
		});
	});
});
