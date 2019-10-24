package com.server.Slooow;

import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.JsonObject;

import org.springframework.web.socket.TextMessage;

public class AchivementList {
    enum ACHIVETYPE {
        GAMESPLAYED, GAMESWON, RECORDS, LEVELPASS
    }

    ArrayList<Achievement> achievementsList = new ArrayList<>();
    Achievement record;

    public AchivementList() {
        initAchievements();
    }

    public void initAchievements() {
        Achievement aux = new Achievement("0", 3, ACHIVETYPE.GAMESPLAYED, 200, "");
        achievementsList.add(aux);
        aux = new Achievement("1", 10, ACHIVETYPE.GAMESPLAYED, 500, "");
        achievementsList.add(aux);
        aux = new Achievement("2", 1, ACHIVETYPE.GAMESWON, 150, "");
        achievementsList.add(aux);
        aux = new Achievement("3", 3, ACHIVETYPE.GAMESWON, 300, "");
        achievementsList.add(aux);
        // retos solo en modo solo
        aux = new Achievement("4", 0, ACHIVETYPE.LEVELPASS, 200, "mapa1");
        achievementsList.add(aux);
        aux = new Achievement("5", 0, ACHIVETYPE.LEVELPASS, 200, "mapa2");
        achievementsList.add(aux);
        aux = new Achievement("6", 0, ACHIVETYPE.LEVELPASS, 200, "mapa3");
        achievementsList.add(aux);
        aux = new Achievement("7", 0,ACHIVETYPE.RECORDS, 300, "");
        record = aux;

    }

    public void beatRecord(PlayerConected player) {
        if (!record.isConseguido()) {
            record.setConseguido(true);
            JsonObject msg3 = new JsonObject();
            msg3.addProperty("event", "ACHIEVE");
            msg3.addProperty("text", record.getText());
            msg3.addProperty("points", record.getPoints());
            player.sessionLock.lock();
            try {
                player.getSession().sendMessage(new TextMessage(msg3.toString()));
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            player.sessionLock.unlock();
        }
    }

    public void checkAchievements(PlayerConected player, String map, boolean success) {
        for (Achievement aux : achievementsList) {
            if (!aux.isConseguido()) {
                switch (aux.getType()) {
                case LEVELPASS:
                    if (success) {
                        if (aux.getLevel().compareTo(map) == 0) {
                            if (!aux.isConseguido()) {
                                aux.setConseguido(true);
                                JsonObject msg3 = new JsonObject();
                                msg3.addProperty("event", "ACHIEVE");
                                msg3.addProperty("text", aux.getText());
                                msg3.addProperty("points", aux.getPoints());
                                player.sessionLock.lock();
                                try {
                                    player.getSession().sendMessage(new TextMessage(msg3.toString()));
                                } catch (IOException e) {
                                    // TODO Auto-generated catch block
                                    e.printStackTrace();
                                } finally {
                                    player.sessionLock.unlock();
                                }
                            }
                        }
                    }
                    break;
                case GAMESPLAYED:
                   
                    if (player.gamesPlayed.get() >= aux.getNumericCondition()) {
                        aux.setConseguido(true);
                        JsonObject msg3 = new JsonObject();
                        msg3.addProperty("event", "ACHIEVE");
                        msg3.addProperty("text", aux.getText());
                        msg3.addProperty("points", aux.getPoints());
                        player.sessionLock.lock();
                        try {
                            player.getSession().sendMessage(new TextMessage(msg3.toString()));
                        } catch (IOException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } finally {
                            player.sessionLock.unlock();
                        }
                    }
                    break;
                case GAMESWON:
                    if (player.gamesWon.get() >= aux.getNumericCondition()) {
                        aux.setConseguido(true);
                        JsonObject msg3 = new JsonObject();
                        msg3.addProperty("event", "ACHIEVE");
                        msg3.addProperty("text", aux.getText());
                        msg3.addProperty("points", aux.getPoints());
                        player.sessionLock.lock();
                        try {
                            player.getSession().sendMessage(new TextMessage(msg3.toString()));
                        } catch (IOException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } finally {
                            player.sessionLock.unlock();
                        }

                    }
                    break;
                default:
                    break;
                }

            }

        }
    }

}