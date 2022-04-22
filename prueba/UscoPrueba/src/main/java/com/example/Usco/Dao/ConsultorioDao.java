/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.Usco.Dao;

import com.example.Usco.Model.Consultorio;

import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Helman
 */
public interface ConsultorioDao extends CrudRepository<Consultorio, Integer>  {
    
}
