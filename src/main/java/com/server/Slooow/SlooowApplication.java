package com.server.Slooow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;

@SpringBootApplication
@EnableWebSocket
public class SlooowApplication implements WebSocketConfigurer {
	
	//Main de la aplicación, se declara en el pom.xml
		public static void main(String[] args) {
			SpringApplication.run(SlooowApplication.class, args);
		}
	
	//Inicializador del registro del websocket, asigna un controller Websocket para la ruta concreta
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(serverHandler(), "/snail").setAllowedOrigins("*");
	}

	//Crea la clase de Websocket y la asocia a una clase
	@Bean
	public WebsocketSnailHandler serverHandler() {
		return new WebsocketSnailHandler();
	}

	
}