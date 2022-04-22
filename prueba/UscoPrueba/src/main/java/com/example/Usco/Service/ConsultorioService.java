/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Model.Consultorio;

import java.util.List;

/**
 *
 * @author Helman
 */
public interface ConsultorioService {
    public List<Consultorio> findAll();
    public Consultorio save(Consultorio consultorio);
    public Consultorio findById(Integer id);
}
