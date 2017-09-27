package com.kgfsl.forum;

import java.util.List;

import com.kgfsl.forum.Event;

public interface EventService {

    public List<Event> getAll();

    public Event save(Event event);

    public Event find(long id);

    public void delete(Long id);

}