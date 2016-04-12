/*
 * Copyright 2014-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.interface21.domain;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.math.BigDecimal;

import lombok.Getter;
import org.ameba.jpa.BaseEntity;

/**
 * An AnswerDefinition is the base class of all possible answers that have common fields.
 *
 * @author <a href="mailto:scherrer@openwms.org">Heiko Scherrer</a>
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "T_ANSWER_DEF")
@Getter
class AnswerDefinition extends BaseEntity {

    /** The provided answer text. */
    private String text;
    /** An order field is used to sort multiple answers of a question. */
    private int order;
    /** A weight of correctness. */
    private BigDecimal weight;
    /** A reference to the question. */
    @OneToOne
    private Question question;

    public AnswerDefinition(String text, int order, BigDecimal weight) {
        this.text = text;
        this.order = order;
        this.weight = weight;
    }
}
