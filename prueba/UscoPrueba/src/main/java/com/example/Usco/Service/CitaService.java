/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Model.Cita;

import java.util.List;

/**
 *
 * @author Helman
 */
public interface CitaService {
    public List<Cita> findAll();
    public Cita save(Cita cita);
    public Cita findById(Integer id);
}
