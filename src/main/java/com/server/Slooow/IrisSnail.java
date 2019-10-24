package com.server.Slooow;

import java.util.concurrent.locks.ReentrantLock;

import org.springframework.web.socket.WebSocketSession;

public class IrisSnail extends SnailInGame {

    public final static float MAXSTAMINA = 1050;
	public final static float MAXVELOCITYX = 7.9f;
	public final static float MAXVELOCITYY = 5.7f;
	public final static float MAXNORMALVELOCITYX = 2.9f;
	public final static float MAXNORMALVELOCITYY = 2.2f; // era 3

	// aceleracion base, es decir sin acelerar
	public final static float NORMALACELERATIONX = 0.7f;
	public final static float NORMALACELERATIONY = 0.7f; // era 0.05

	// aceleracion cuando aceleras - ACTUALMENTE NO ES UN PARÁMETRO USABLE (NO BORRAR)
	public final static float ACELERATIONX = 0.2f;
	public final static float ACELERATIONY = 0.2f;

	public final static float GRAVITY = 0.3f;
	public final static float BREAKFORCE = 0.2f;
	// Tarda 5 segundos en perder la stamina
	public final static float STAMINALOSE = 9;
	public final static float STAMINAWALLLOSE = 1.8f;
	// Tarda 2 segundos en recargar la stamina
	public final static float STAMINANORMALRECOVER = 2.6f;
	// Tarda 3.33 segundos en recargar la stamina
	public final static float STAMINARUNOUTRECOVER = 4.2f;
	public final static float MAXGRAVITYSPEED = -10;
	public final static float MASS = 0.85f;
	public final static float SPEEDXLOSE = 1.02f;

	public final static int STATSPEED = 4;
	public final static int STATAC = 2;
	public final static int STATWEIGHT = 2;
	public final static int STATSTAMINA = 3;
	public final static int STATREGEN = 2;

	public final static int CASHPRICE = 0;
	public final static int POINTSPRICE = 0;

    public IrisSnail(WebSocketSession mySession, ReentrantLock sessionLock) {
		super(mySession, sessionLock, MAXSTAMINA, MAXVELOCITYX, MAXVELOCITYY, MAXNORMALVELOCITYX, 
		MAXNORMALVELOCITYY, NORMALACELERATIONX, NORMALACELERATIONY, 
		ACELERATIONX, ACELERATIONY, GRAVITY, BREAKFORCE, 
		STAMINALOSE, STAMINAWALLLOSE, STAMINANORMALRECOVER, 
		STAMINARUNOUTRECOVER, MAXGRAVITYSPEED, MASS, SPEEDXLOSE, 
		STATSPEED, STATAC, STATWEIGHT, 
		STATSTAMINA, STATREGEN, CASHPRICE, POINTSPRICE);
    }


}