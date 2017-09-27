package com.kgfsl.forum;
import com.kgfsl.forum.Event;
import com.kgfsl.forum.Agenda;

public class AgendaBuilder {
  private Agenda agenda = new Agenda();
  private Event event;
  
  public AgendaBuilder id(Long id) {
	 agenda.setaId(id);
    return this;
  }
  
  public AgendaBuilder time(String time) {
	agenda.setTime(time);
    return this;
  }

   public AgendaBuilder desc(String desc) {
	agenda.setDescription(desc);
    return this;
  }

   public AgendaBuilder ins(String ins) {
	agenda.setInstructor(ins);
    return this;
  }
   
  
   public Agenda build() {
    return agenda;
  }
}