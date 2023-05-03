import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { AppModule } from "../../app.module";
import { MessageService } from "../service/message.service";

describe("MessageController", () => {
  let app;
  let messageService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    messageService = moduleRef.get<MessageService>(MessageService);
  });

  afterAll(async () => {
    await app.close();
  });

  describe("createMessage", () => {
    it("should create a new message", async () => {
      const message = {
        title: "Test Message",
        content: "Test Message Content",
      };

      jest.spyOn(messageService, "createMessage").mockImplementation(() =>
        Promise.resolve({
          id: "1",
          title: "Test Message",
          content: "Test Message Content",
        })
      );

      const response = await request(app.getHttpServer())
        .post("/message")
        .send(message)
        .expect(201);

      expect(response.body).toEqual({
        id: "1",
        title: "Test Message",
        content: "Test Message Content",
      });
      expect(messageService.createMessage).toHaveBeenCalledTimes(1);
      expect(messageService.createMessage).toHaveBeenCalledWith(message);
    });
  });
});
